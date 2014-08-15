var SenkyoMVP_Display = function (document) {
	var span = {
		jinkei_f      : document.getElementById('KC_JINKEI_F'),
		jinkei_e      : document.getElementById('KC_JINKEI_E'),
		kaiteki       : document.getElementById('KC_KAITEKI'),
		sakuteki_f    : document.getElementById('KC_SAKUTEKI_F'),
		sakuteki_e    : document.getElementById('KC_SAKUTEKI_E'),
		shokusetsu1_f : document.getElementById('KC_SHOKUSETSU1_F'),
		shokusetsu2_f : document.getElementById('KC_SHOKUSETSU2_F'),
		shokusetsu1_e : document.getElementById('KC_SHOKUSETSU1_E'),
		shokusetsu2_e : document.getElementById('KC_SHOKUSETSU2_E'),
		k1_stage1_f   : document.getElementById('KC_K1_STAGE1_F'),
		k1_stage1_e   : document.getElementById('KC_K1_STAGE1_E'),
		k1_stage2_f   : document.getElementById('KC_K1_STAGE2_F'),
		k1_stage2_e   : document.getElementById('KC_K1_STAGE2_E'),
		k2_stage1_f   : document.getElementById('KC_K2_STAGE1_F'),
		k2_stage1_e   : document.getElementById('KC_K2_STAGE1_E'),
		k2_stage2_f   : document.getElementById('KC_K2_STAGE2_F'),
		k2_stage2_e   : document.getElementById('KC_K2_STAGE2_E'),
		seiku         : document.getElementById('KC_SEIKU'),
		songai_f      : document.getElementById('KC_SONGAI_F'),
		songai_e      : document.getElementById('KC_SONGAI_E'),
		bairitsu      : document.getElementById('KC_BAIRITSU'),
		mvp1          : document.getElementById('KC_MVP1'),
		mvp2          : document.getElementById('KC_MVP2'),
		dmgk          : document.getElementById('KC_KOUKUU_DAMAGE')
	};

	var cell = {
		y_dmg_f1      : document.querySelectorAll('#KC_DAMAGE1 td:nth-child(1)'),
		y_dmg_f2      : document.querySelectorAll('#KC_DAMAGE2 td:nth-child(1)'),
		s_hp_f1       : document.querySelectorAll('#KC_DAMAGE1 td:nth-child(2)'),
		s_hp_e1       : document.querySelectorAll('#KC_DAMAGE1 td:nth-child(5)'),
		s_hp_f2       : document.querySelectorAll('#KC_DAMAGE2 td:nth-child(2)'),
		s_hp_e2       : document.querySelectorAll('#KC_DAMAGE2 td:nth-child(5)'),
		dmg_f1        : document.querySelectorAll('#KC_DAMAGE1 td:nth-child(3)'),
		dmg_e1        : document.querySelectorAll('#KC_DAMAGE1 td:nth-child(6)'),
		dmg_f2        : document.querySelectorAll('#KC_DAMAGE2 td:nth-child(3)'),
		dmg_e2        : document.querySelectorAll('#KC_DAMAGE2 td:nth-child(6)'),
		e_hp_f1       : document.querySelectorAll('#KC_DAMAGE1 td:nth-child(4)'),
		e_hp_e1       : document.querySelectorAll('#KC_DAMAGE1 td:nth-child(7)'),
		e_hp_f2       : document.querySelectorAll('#KC_DAMAGE2 td:nth-child(4)'),
		e_hp_e2       : document.querySelectorAll('#KC_DAMAGE2 td:nth-child(7)')
	};

	function hpClassName(n, m) {
		var hp_rate = n / m * 100;
		return (
			(hp_rate ===   0) ? 'kc-hp0'   :
			(hp_rate <=   25) ? 'kc-hp25'  :
			(hp_rate <=   50) ? 'kc-hp50'  :
			(hp_rate <=   75) ? 'kc-hp75'  :
			(hp_rate === 100) ? 'kc-hp100' :
			'kc-hp'
		);
	}

	function setCellsHPs(smvp, fe, cells) {
		for (var i = 0, cell; cell = cells[i]; i++) {
			var nm = smvp.getHPs(fe, i);
			var n = nm[0];
			var m = nm[1];
			if (m === -1) break;
			cell.textContent = n + '/' + m;
			// cell.className = hpClassName(n, m);
		}
	}

	function setCellsHPe(smvp, fe, cells) {
		for (var i = 0, cell; cell = cells[i]; i++) {
			var nm = smvp.getHPe(fe, i);
			var n = nm[0];
			var m = nm[1];
			if (m === -1) break;
			cell.textContent = n; // + '/' + m;
			cell.className = hpClassName(n, m);
		}
	}

	function setCellsDmg(smvp, fe, cells) {
		for (var i = 0, cell; cell = cells[i]; i++) {
			var d = smvp.getDmg(fe, i);
			if (d === -1) break;
			cell.textContent = d;
		}
	}

	function setCellsYdm(smvp, fe, cells) {
		for (var i = 0, cell; cell = cells[i]; i++) {
			var d = smvp.getYdm(fe, i);
			if (d === -1) break;
			cell.textContent = d;
		}
	}

	return {
		set: function (smvp) {
			span.jinkei_f.textContent      = smvp.getJinkei(smvp.F1);
			span.jinkei_e.textContent      = smvp.getJinkei(smvp.E1);
			span.kaiteki.textContent       = smvp.getKaiteki();
			span.sakuteki_f.textContent    = smvp.getSakuteki(smvp.F1);
			span.sakuteki_e.textContent    = smvp.getSakuteki(smvp.E1);
			span.shokusetsu1_f.textContent = smvp.getShokusetsu(1, smvp.F1);
			span.shokusetsu2_f.textContent = smvp.getShokusetsu(2, smvp.F1);
			span.shokusetsu1_e.textContent = smvp.getShokusetsu(1, smvp.E1);
			span.shokusetsu2_e.textContent = smvp.getShokusetsu(2, smvp.E1);
			span.seiku.textContent         = smvp.getSeiku();
			span.songai_f.textContent      = smvp.getSongaiF();
			span.songai_e.textContent      = smvp.getSongaiE();
			span.bairitsu.textContent      = smvp.getBairitsu();
			span.mvp1.textContent          = smvp.getMVP1();
			span.mvp2.textContent          = smvp.getMVP2();
			span.dmgk.textContent          = smvp.getDmgK();
			/*
			span.k1_stage1_f.textContent   = smvp.getStageLost(1, 1, smvp.F1);
			span.k1_stage1_e.textContent   = smvp.getStageLost(1, 1, smvp.E1);
			span.k1_stage2_f.textContent   = smvp.getStageLost(1, 2, smvp.F1);
			span.k1_stage2_e.textContent   = smvp.getStageLost(1, 2, smvp.E1);
			span.k2_stage1_f.textContent   = smvp.getStageLost(2, 1, smvp.F1);
			span.k2_stage1_e.textContent   = smvp.getStageLost(2, 1, smvp.E1);
			span.k2_stage2_f.textContent   = smvp.getStageLost(2, 2, smvp.F1);
			span.k2_stage2_e.textContent   = smvp.getStageLost(2, 2, smvp.E1);
			*/

			setCellsYdm(smvp, smvp.F1, cell.y_dmg_f1);
			setCellsYdm(smvp, smvp.F2, cell.y_dmg_f2);

			setCellsHPs(smvp, smvp.F1, cell.s_hp_f1);
			setCellsHPs(smvp, smvp.E1, cell.s_hp_e1);
			setCellsHPs(smvp, smvp.F2, cell.s_hp_f2);
			setCellsHPs(smvp, smvp.E2, cell.s_hp_e2);

			setCellsDmg(smvp, smvp.F1, cell.dmg_f1);
			setCellsDmg(smvp, smvp.E1, cell.dmg_e1);
			setCellsDmg(smvp, smvp.F2, cell.dmg_f2);
			setCellsDmg(smvp, smvp.E2, cell.dmg_e2);

			setCellsHPe(smvp, smvp.F1, cell.e_hp_f1);
			setCellsHPe(smvp, smvp.E1, cell.e_hp_e1);
			setCellsHPe(smvp, smvp.F2, cell.e_hp_f2);
			setCellsHPe(smvp, smvp.E2, cell.e_hp_e2);
		},

		reset: function () {
			Object.keys(span).forEach(function (key) {
				var s = span[key];
				if (!s) return;
				s.textContent = '';
			});

			Object.keys(cell).forEach(function (key) {
				var cs = cell[key];
				for (var i = 0, len = cs.length; i < len; i++) {
					var c = cs[i];
					if (!c) continue;
					c.textContent = '';
					c.className = '';
				}
			});
		}
	};
};

