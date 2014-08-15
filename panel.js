(function () {
	var $display;

	var $ydamage_1 = [];
	var $ydamage_2 = [];
	var $ydamage_k = 0;

	window.addEventListener('load', function () {
		$display = SenkyoMVP_Display(document);
	});

	var $battle               = false;
	var $battle_midnight      = false;
	var $battle_midnight_sp   = false;
	var $practice             = false;
	var $practice_midnight    = false;
	var $combined_battle      = false;
	var $combined_midnight    = false;
	var $combined_midnight_sp = false;
	var $combined_air         = false;

	chrome.devtools.network.onRequestFinished.addListener(requestFinishedHandler);

	function requestFinishedHandler(req) {
		var url = req.request.url;
		if (!/^http:\/\/.+?\/kcsapi\//.test(url)) return;

		$battle               = /api_req_sortie\/battle$/.test(url);
		$battle_midnight      = /api_req_battle_midnight\/battle$/.test(url);
		$battle_midnight_sp   = /api_req_battle_midnight\/sp_midnight$/.test(url);
		$practice             = /api_req_practice\/battle$/.test(url);
		$practice_midnight    = /api_req_practice\/midnight_battle$/.test(url);
		$combined_battle      = /api_req_combined_battle\/battle$/.test(url);
		$combined_midnight    = /api_req_combined_battle\/midnight_battle$/.test(url);
		$combined_midnight_sp = /api_req_combined_battle\/sp_midnight$/.test(url);
		$combined_air         = /api_req_combined_battle\/airbattle$/.test(url);

		if (!$battle &&
			!$battle_midnight &&
			!$battle_midnight_sp &&
			!$practice &&
			!$practice_midnight &&
			!$combined_battle &&
			!$combined_midnight &&
			!$combined_midnight_sp &&
			!$combined_air) return;

		req.getContent(getContentHandler);
	}

	function getContentHandler(content) {
		$display.reset();

		if (!content) return;
		content = content.replace(/^.+=/, '');

		var json = JSON.parse(content);
		var result_code = json.api_result;
		if (result_code !== 1) return;

		var smvp;

		if (
			$battle ||
			$practice ||
			$combined_battle ||
			$combined_air
		) {
			smvp = SenkyoMVP(json, true);
			var d = smvp.getDmgY();
			$ydamage_1 = d[0];
			$ydamage_2 = d[1];
			$ydamage_k = d[2];

		} else if (
			$battle_midnight ||
			$practice_midnight ||
			$combined_midnight
		) {
			smvp = SenkyoMVP(json, false);
			smvp.addDmgY($ydamage_1, $ydamage_2, $ydamage_k);
		}

		$display.set(smvp);
	}
}());

