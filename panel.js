(function () {
	var $display;

	var $ydamage_1 = [];
	var $ydamage_2 = [];
	var $ydamage_k = 0;

	window.addEventListener('load', function () {
		$display = SenkyoMVP_Display(document);
		/*
		$battle = false;
		$battle_midnight = false;
		$battle_midnight_sp = true;
		var d = '{"api_result":1,"api_result_msg":"\u6210\u529f","api_data":{"api_dock_id":1,"api_ship_ke":[-1,225,-1,-1,-1,-1,-1],"api_ship_lv":[-1,58,-1,-1,-1,-1,-1],"api_nowhps":[-1,34,32,31,37,41,67,32,-1,-1,-1,-1,-1],"api_maxhps":[-1,34,32,31,37,41,67,32,-1,-1,-1,-1,-1],"api_midnight_flag":0,"api_eSlot":[[29,29,29,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1]],"api_eKyouka":[[37,51,33,35],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],"api_fParam":[[39,26,40,28],[70,87,52,54],[73,93,59,52],[59,89,59,59],[59,99,59,59],[57,0,84,75]],"api_eParam":[[49,79,49,49],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],"api_search":[1,6],"api_formation":[1,1,2],"api_stage_flag":[1,0,0],"api_kouku":{"api_plane_from":[[6],[-1]],"api_stage1":{"api_f_count":6,"api_f_lostcount":0,"api_e_count":0,"api_e_lostcount":0,"api_disp_seiku":1,"api_touch_plane":[-1,-1]},"api_stage2":null,"api_stage3":null},"api_opening_flag":0,"api_opening_atack":null,"api_hourai_flag":[1,0,0,0],"api_hougeki1":{"api_at_list":[-1,1,7,2],"api_at_type":[-1,2,0,0],"api_df_list":[-1,[7,7],[1],[7]],"api_si_list":[-1,[50,50],[-1],[3]],"api_cl_list":[-1,[1,1],[0],[2]],"api_damage":[-1,[9,3],[0],[34]]},"api_hougeki2":null,"api_hougeki3":null,"api_raigeki":null}}';
		var d = '{"api_result":1,"api_result_msg":"\u6210\u529f","api_data":{"api_deck_id":"1","api_nowhps":[-1,28,18,20,15,-1,-1,10,18,0,58,0,0],"api_ship_ke":[-1,524,511,512,509,506,506],"api_ship_lv":[-1,1,1,1,1,1,1],"api_maxhps":[-1,28,18,22,15,-1,-1,90,90,85,58,36,36],"api_eSlot":[[509,509,512,528,-1],[509,512,525,-1,-1],[519,523,516,-1,-1],[505,513,525,-1,-1],[506,525,-1,-1,-1],[506,525,-1,-1,-1]],"api_eKyouka":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],"api_fParam":[[19,80,0,24],[12,89,0,19],[12,84,0,19],[11,69,0,18]],"api_eParam":[[85,0,70,85],[65,0,70,70],[0,0,30,40],[32,32,16,28],[16,28,12,18],[16,28,12,18]],"api_touch_plane":[-1,-1],"api_flare_pos":[-1,-1],"api_hougeki":{"api_at_list":[-1,1,2,3],"api_df_list":[-1,[10,10],[7],[8,8]],"api_si_list":[-1,[58,58],[-1],[15,15]],"api_cl_list":[-1,[1,1],[1],[1,2]],"api_sp_list":[-1,3,0,3],"api_damage":[-1,[159,163],[61],[119,207]]}}}';
		var d = '{"api_result":1,"api_result_msg":"\u6210\u529f","api_data":{"api_deck_id":"1","api_ship_ke":[-1,583,549,550,577,577,577],"api_ship_lv":[-1,1,1,1,1,1,1],"api_nowhps":[-1,40,83,85,79,69,75,550,66,66,38,38,38],"api_maxhps":[-1,40,90,85,79,75,75,550,66,66,38,38,38],"api_nowhps_combined":[-1,37,31,48,43,50,50],"api_maxhps_combined":[-1,37,31,48,43,50,50],"api_midnight_flag":1,"api_eSlot":[[505,547,548,549,-1],[505,520,524,-1,-1],[505,520,517,-1,-1],[502,515,542,-1,-1],[502,515,542,-1,-1],[502,515,542,-1,-1]],"api_eKyouka":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],"api_fParam":[[33,0,37,43],[98,0,84,94],[49,0,79,79],[49,0,79,79],[39,0,79,72],[39,0,79,72]],"api_eParam":[[100,0,140,135],[55,45,20,50],[55,45,20,50],[44,72,36,29],[44,72,36,29],[44,72,36,29]],"api_fParam_combined":[[54,89,59,54],[57,84,72,52],[68,84,72,68],[63,139,49,63],[75,69,59,71],[75,69,59,71]],"api_search":[1,5],"api_formation":["14",3,2],"api_stage_flag":[1,1,1],"api_kouku":{"api_plane_from":[[1,3,4,5,6],[7,8,9]],"api_stage1":{"api_f_count":271,"api_f_lostcount":24,"api_e_count":320,"api_e_lostcount":100,"api_disp_seiku":2,"api_touch_plane":[94,-1]},"api_stage2":{"api_f_count":105,"api_f_lostcount":4,"api_e_count":126,"api_e_lostcount":16},"api_stage3":{"api_frai_flag":[-1,0,0,0,0,0,0],"api_erai_flag":[-1,1,0,0,1,1,1],"api_fbak_flag":[-1,0,0,0,0,0,0],"api_ebak_flag":[-1,0,0,0,1,0,0],"api_fcl_flag":[-1,0,0,0,0,0,0],"api_ecl_flag":[-1,0,0,0,0,0,0],"api_fdam":[-1,0,0,0,0,0,0],"api_edam":[-1,34,0,0,44,37,0]},"api_stage3_combined":{"api_frai_flag":[-1,1,0,1,0,0,0],"api_fbak_flag":[-1,1,0,1,0,0,0],"api_fcl_flag":[-1,0,0,0,0,0,0],"api_fdam":[-1,0.1,0,0,0,0,0]}},"api_support_flag":0,"api_support_info":null,"api_opening_flag":1,"api_opening_atack":{"api_frai":[-1,0,0,0,5,0,0],"api_erai":[-1,0,0,0,0,0,0],"api_fdam":[-1,0,0,0,0,0,0],"api_edam":[-1,0,0,0,0,66,0],"api_fydam":[-1,0,0,0,66,0,0],"api_eydam":[-1,0,0,0,0,0,0],"api_fcl":[-1,0,0,0,1,0,0],"api_ecl":[-1,0,0,0,0,0,0]},"api_hourai_flag":[1,1,1,1],"api_hougeki1":{"api_at_list":[-1,6,7,3,9,5,8,4,1,2],"api_at_type":[-1,2,0,0,0,0,0,0,0,0],"api_df_list":[-1,[12,12],[3],[9],[3],[9],[1],[9],[7],[7]],"api_si_list":[-1,[50,50],[505],[50],[505],[50],[505],[50],[78],[63]],"api_cl_list":[-1,[1,1],[0],[1],[1],[1],[0],[1],[1],[1]],"api_damage":[-1,[61,0],[0],[25],[3],[25],[0],[22],[42],[35]]},"api_raigeki":{"api_frai":[-1,2,2,2,2,2,2],"api_erai":[-1,0,3,0,0,0,0],"api_fdam":[-1,0,0,4,0,0,0],"api_edam":[-1,0,105,0,0,0,0],"api_fydam":[-1,18,9,3,61,13,1],"api_eydam":[-1,0,4,0,0,0,0],"api_fcl":[-1,1,1,1,1,1,1],"api_ecl":[-1,0,1,0,0,0,0]},"api_hougeki2":{"api_at_list":[-1,2,7,3,5,1],"api_at_type":[-1,2,0,0,0,0],"api_df_list":[-1,[7,7],[6],[7],[7],[7]],"api_si_list":[-1,[9,9],[505],[-1],[-1],[-1]],"api_cl_list":[-1,[1,1],[1],[2],[1],[1]],"api_damage":[-1,[14,50],[71],[41],[34],[19]]},"api_hougeki3":{"api_at_list":[-1,1,2,3,5],"api_at_type":[-1,0,2,0,0],"api_df_list":[-1,[7],[7,7],[7],[7]],"api_si_list":[-1,[-1],[9,9],[-1],[-1]],"api_cl_list":[-1,[1],[2,1],[0],[1]],"api_damage":[-1,[37],[62,36],[0],[10]]}}}';
		var d = '{"api_result":1,"api_result_msg":"\u6210\u529f","api_data":{"api_deck_id":"1","api_ship_ke":[-1,583,549,550,577,577,577],"api_ship_lv":[-1,1,1,1,1,1,1],"api_nowhps":[-1,40,83,85,79,69,4,136,0,0,0,0,0],"api_maxhps":[-1,40,90,85,79,75,75,550,66,66,38,38,38],"api_nowhps_combined":[-1,37,31,41,43,50,50],"api_maxhps_combined":[-1,37,31,48,43,50,50],"api_eSlot":[[505,547,548,549,-1],[505,520,524,-1,-1],[505,520,517,-1,-1],[502,515,542,-1,-1],[502,515,542,-1,-1],[502,515,542,-1,-1]],"api_eKyouka":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],"api_fParam":[[33,0,37,43],[98,0,84,94],[49,0,79,79],[49,0,79,79],[39,0,79,72],[39,0,79,72]],"api_eParam":[[100,0,140,135],[55,45,20,50],[55,45,20,50],[44,72,36,29],[44,72,36,29],[44,72,36,29]],"api_fParam_combined":[[54,89,59,54],[57,84,72,52],[68,84,72,68],[63,139,49,63],[75,69,59,71],[75,69,59,71]],"api_touch_plane":[-1,-1],"api_flare_pos":[-1,-1],"api_hougeki":{"api_at_list":[-1,1,2,3,4,5],"api_df_list":[-1,[7,7],[7,7],[7,7],[7,7],[7,7]],"api_si_list":[-1,[78,78],[63,63],[50,50],[50,50],[50,50]],"api_cl_list":[-1,[1,1],[1,1],[1,1],[1,1],[1,1]],"api_sp_list":[-1,1,1,1,1,1],"api_damage":[-1,[11,12],[12,12],[8,5],[8,6],[123,98]]}}}';
		var d = '{"api_result":1,"api_result_msg":"\u6210\u529f","api_data":{"api_deck_id":"1","api_ship_ke":[-1,579,555,522,522,577,577],"api_ship_lv":[-1,1,1,1,1,1,1],"api_nowhps":[-1,40,90,85,79,75,75,96,57,60,60,38,38],"api_maxhps":[-1,40,90,85,79,75,75,96,57,60,60,38,38],"api_nowhps_combined":[-1,37,31,48,43,50,50],"api_maxhps_combined":[-1,37,31,48,43,50,50],"api_midnight_flag":1,"api_eSlot":[[547,548,549,549,-1],[506,525,542,543,-1],[505,506,525,525,-1],[505,506,525,525,-1],[502,515,542,-1,-1],[502,515,542,-1,-1]],"api_eKyouka":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],"api_fParam":[[33,0,37,43],[98,0,84,94],[49,0,79,79],[49,0,79,79],[39,0,79,72],[39,0,79,72]],"api_eParam":[[25,0,50,80],[48,80,30,39],[58,42,30,60],[58,42,30,60],[44,72,36,29],[44,72,36,29]],"api_fParam_combined":[[54,89,59,54],[57,84,72,52],[68,84,72,68],[63,139,49,63],[75,69,59,71],[75,69,59,71]],"api_search":[1,1],"api_formation":["14",3,3],"api_stage_flag":[1,1,1],"api_kouku":{"api_plane_from":[[1,3,4,5,6],[7]],"api_stage1":{"api_f_count":326,"api_f_lostcount":8,"api_e_count":96,"api_e_lostcount":69,"api_disp_seiku":1,"api_touch_plane":[52,-1]},"api_stage2":{"api_f_count":149,"api_f_lostcount":4,"api_e_count":18,"api_e_lostcount":7},"api_stage3":{"api_frai_flag":[-1,0,1,0,0,1,0],"api_erai_flag":[-1,0,1,0,1,1,1],"api_fbak_flag":[-1,0,0,0,0,0,0],"api_ebak_flag":[-1,0,0,1,0,0,0],"api_fcl_flag":[-1,0,0,0,0,0,0],"api_ecl_flag":[-1,0,0,0,0,0,0],"api_fdam":[-1,0,0,0,0,6,0],"api_edam":[-1,0,144,0,0,0,109]},"api_stage3_combined":{"api_frai_flag":[-1,0,0,0,0,0,0],"api_fbak_flag":[-1,0,1,0,0,0,0],"api_fcl_flag":[-1,0,0,0,0,0,0],"api_fdam":[-1,0,0,0,0,0,0]}},"api_support_flag":0,"api_support_info":null,"api_stage_flag2":[1,1,1],"api_kouku2":{"api_plane_from":[[1,3,4,5,6],[7]],"api_stage1":{"api_f_count":314,"api_f_lostcount":5,"api_e_count":20,"api_e_lostcount":7,"api_disp_seiku":1,"api_touch_plane":[94,-1]},"api_stage2":{"api_f_count":142,"api_f_lostcount":13,"api_e_count":7,"api_e_lostcount":4},"api_stage3":{"api_frai_flag":[-1,0,0,1,0,0,0],"api_erai_flag":[-1,1,0,1,1,1,0],"api_fbak_flag":[-1,0,0,0,0,1,0],"api_ebak_flag":[-1,0,0,0,1,0,0],"api_fcl_flag":[-1,0,0,0,0,0,0],"api_ecl_flag":[-1,0,0,0,0,0,0],"api_fdam":[-1,0,0,0,0,0,0],"api_edam":[-1,0,0,29,257.1,0,0]},"api_stage3_combined":{"api_frai_flag":[-1,1,0,0,0,0,0],"api_fbak_flag":[-1,0,0,1,0,0,0],"api_fcl_flag":[-1,0,0,0,0,0,0],"api_fdam":[-1,0,0,0,0,0,0]}}}}';
		var d = '{"api_result":1,"api_result_msg":"\u6210\u529f","api_data":{"api_deck_id":"1","api_ship_ke":[-1,583,549,550,577,577,577],"api_ship_lv":[-1,1,1,1,1,1,1],"api_nowhps":[-1,37,90,85,79,59,75,550,66,66,38,38,38],"api_maxhps":[-1,40,90,85,79,75,75,550,66,66,38,38,38],"api_nowhps_combined":[-1,31,37,48,43,50,50],"api_maxhps_combined":[-1,31,37,48,43,50,50],"api_midnight_flag":1,"api_eSlot":[[505,547,548,549,-1],[505,520,524,-1,-1],[505,520,517,-1,-1],[502,515,542,-1,-1],[502,515,542,-1,-1],[502,515,542,-1,-1]],"api_eKyouka":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],"api_fParam":[[33,0,37,43],[98,0,84,94],[49,0,79,79],[49,0,79,79],[39,0,79,72],[39,0,79,72]],"api_eParam":[[100,0,140,135],[55,45,20,50],[55,45,20,50],[44,72,36,29],[44,72,36,29],[44,72,36,29]],"api_fParam_combined":[[57,84,72,52],[54,89,59,54],[68,84,72,68],[63,139,49,63],[75,69,59,71],[75,69,59,71]],"api_search":[1,5],"api_formation":["14",3,1],"api_stage_flag":[1,1,1],"api_kouku":{"api_plane_from":[[1,3,4,5,6],[7,8,9]],"api_stage1":{"api_f_count":249,"api_f_lostcount":26,"api_e_count":320,"api_e_lostcount":101,"api_disp_seiku":2,"api_touch_plane":[59,-1]},"api_stage2":{"api_f_count":86,"api_f_lostcount":10,"api_e_count":139,"api_e_lostcount":5},"api_stage3":{"api_frai_flag":[-1,0,0,0,0,1,0],"api_erai_flag":[-1,0,0,1,1,1,0],"api_fbak_flag":[-1,0,0,0,1,0,0],"api_ebak_flag":[-1,0,0,1,0,0,0],"api_fcl_flag":[-1,0,0,0,0,0,0],"api_ecl_flag":[-1,0,0,0,0,0,0],"api_fdam":[-1,0,0,0,6,0,0],"api_edam":[-1,0,0,93,35,0,0]},"api_stage3_combined":{"api_frai_flag":[-1,1,0,0,0,0,0],"api_fbak_flag":[-1,0,0,0,0,1,0],"api_fcl_flag":[-1,0,0,0,0,0,0],"api_fdam":[-1,0,0,0,0,0,0]}},"api_support_flag":0,"api_support_info":null,"api_opening_flag":1,"api_opening_atack":{"api_frai":[-1,0,0,0,6,0,0],"api_erai":[-1,0,0,0,0,0,0],"api_fdam":[-1,0,0,0,0,0,0],"api_edam":[-1,0,0,0,0,0,124],"api_fydam":[-1,0,0,0,124,0,0],"api_eydam":[-1,0,0,0,0,0,0],"api_fcl":[-1,0,0,0,1,0,0],"api_ecl":[-1,0,0,0,0,0,0]},"api_hourai_flag":[1,1,1,1],"api_hougeki1":{"api_at_list":[-1,3,7,6,8,5,4,1,2],"api_at_type":[-1,2,0,0,0,0,0,0,0],"api_df_list":[-1,[10,10],[3],[11],[4],[8],[8],[7],[7]],"api_si_list":[-1,[50,50],[505],[50],[505],[50],[50],[63],[78]],"api_cl_list":[-1,[1,1],[0],[1],[0],[1],[2],[1],[1]],"api_damage":[-1,[97,0],[0],[88],[0],[57],[121],[60],[60]]},"api_raigeki":{"api_frai":[-1,0,0,0,0,0,0],"api_erai":[-1,0,0,0,0,0,0],"api_fdam":[-1,0,0,0,0,0,0],"api_edam":[-1,0,0,0,0,0,0],"api_fydam":[-1,0,0,0,0,0,0],"api_eydam":[-1,0,0,0,0,0,0],"api_fcl":[-1,0,0,0,0,0,0],"api_ecl":[-1,0,0,0,0,0,0]},"api_hougeki2":{"api_at_list":[-1,2,7,5,3,6,1],"api_at_type":[-1,2,0,0,0,0,0],"api_df_list":[-1,[7,7],[3],[7],[7],[7],[7]],"api_si_list":[-1,[9,9],[505],[-1],[-1],[-1],[-1]],"api_cl_list":[-1,[1,1],[0],[1],[1],[1],[1]],"api_damage":[-1,[17,36],[0],[27],[41],[25],[36]]},"api_hougeki3":{"api_at_list":[-1,1,2,3,5,6],"api_at_type":[-1,0,2,0,0,0],"api_df_list":[-1,[7],[7,7],[7],[7],[7]],"api_si_list":[-1,[-1],[9,9],[-1],[-1],[-1]],"api_cl_list":[-1,[1],[1,1],[1],[1],[1]],"api_damage":[-1,[26],[9,16],[40],[18],[14]]}}}';
		var d = '{"api_result":1,"api_result_msg":"\u6210\u529f","api_data":{"api_deck_id":"1","api_ship_ke":[-1,529,522,522,520,578,578],"api_ship_lv":[-1,1,1,1,1,1,1],"api_nowhps":[-1,89,83,77,79,70,75,98,60,60,55,40,40],"api_maxhps":[-1,89,90,85,79,75,75,98,60,60,55,40,40],"api_nowhps_combined":[-1,42,45,50,41,31,33],"api_maxhps_combined":[-1,48,50,50,43,31,37],"api_eSlot":[[509,509,525,528,-1],[505,506,525,525,-1],[505,506,525,525,-1],[506,513,525,-1,-1],[502,515,542,-1,-1],[502,515,542,-1,-1]],"api_eKyouka":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],"api_fParam":[[96,0,92,93],[98,0,84,94],[49,0,79,79],[49,0,79,79],[39,0,79,72],[39,0,79,72]],"api_eParam":[[90,0,80,99],[58,42,30,60],[58,42,30,60],[36,48,24,36],[48,84,38,33],[48,84,38,33]],"api_fParam_combined":[[68,84,72,68],[75,69,59,71],[75,69,59,71],[63,139,49,63],[57,84,72,52],[54,89,59,54]],"api_formation":["1",2,1],"api_touch_plane":[-1,-1],"api_flare_pos":[2,-1],"api_hougeki":{"api_at_list":[-1,1,7,2,8,3,4,5,6],"api_df_list":[-1,[10,10],[2,2],[12,12],[3,3],[9,9],[11,11],[8],[8]],"api_si_list":[-1,[50,50],[509,509],[50,50],[505,506],[50,50],[50,50],[-1],[-1]],"api_cl_list":[-1,[1,1],[1,1],[1,1],[1,1],[2,1],[1,1],[0],[1]],"api_sp_list":[-1,1,1,1,1,1,1,0,0],"api_damage":[-1,[160,163],[29,2],[100,0],[6,29],[142,72],[250,252],[0],[66]]}}}';
		getContentHandler(d);
		*/
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

		$battle               = /\/api_req_sortie\/battle$/.test(url);
		$battle_midnight      = /\/api_req_battle_midnight\/battle$/.test(url);
		$battle_midnight_sp   = /\/api_req_battle_midnight\/sp_midnight$/.test(url);
		$practice             = /\/api_req_practice\/battle$/.test(url);
		$practice_midnight    = /\/api_req_practice\/midnight_battle$/.test(url);
		$combined_battle      = /\/api_req_combined_battle\/battle$/.test(url);
		$combined_midnight    = /\/api_req_combined_battle\/midnight_battle$/.test(url);
		$combined_midnight_sp = /\/api_req_combined_battle\/sp_midnight$/.test(url);
		$combined_air         = /\/api_req_combined_battle\/airbattle$/.test(url);

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

		} else if (
			$battle_midnight_sp ||
			$combined_midnight_sp
		) {
			smvp = SenkyoMVP(json, false);
		}

		$display.set(smvp);
	}
}());

