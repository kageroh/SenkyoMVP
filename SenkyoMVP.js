var SenkyoMVP = function (json, type, start_hps) {
	var _f1_ = 0;
	var _e1_ = 1;
	var _f2_ = 2;
	var _e2_ = 3;

	var _n_ = 0;
	var _a_ = 1;
	var _w_ = 2;
	var _m_ = 8;

	var JINKEI = [
		'',
		'単縦',
		'複縦',
		'輪形',
		'梯形',
		'単横',
		'',
		'',
		'',
		'',
		'',
		'第一',
		'第二',
		'第三',
		'第四'
	];

	var KAITEKI = [
		'',
		'同航',
		'反航',
		'T有利',
		'T不利'
	];

	var SAKUTEKI = [
		'',
		'成功',
		'成功',
		'失敗',
		'失敗',
		'成功',
		'なし'
	];

	var SEIKU = [
		'拮抗',
		'確保',
		'優勢',
		'劣勢',
		'喪失'
	];

	var data        = json.api_data;

	var formation   = data.api_formation;
	var search      = data.api_search;

	var kouku1      = data.api_kouku;
	var kouku2      = data.api_kouku2;

	var op_attack   = data.api_opening_atack;
	var support     = data.api_support_info;
	var hougeki1    = data.api_hougeki1;
	var hougeki2    = data.api_hougeki2;
	var hougeki3    = data.api_hougeki3;
	var hougeki8    = data.api_hougeki; // 夜
	var raigeki     = data.api_raigeki;

	var nowhps      = data.api_nowhps || [];
	var maxhps      = data.api_maxhps || [];
	var nowhps_cb   = data.api_nowhps_combined || [];
	var maxhps_cb   = data.api_maxhps_combined || [];

	var nowhps_f1   = nowhps.slice(1,7);
	var maxhps_f1   = maxhps.slice(1,7);
	var nowhps_e1   = nowhps.slice(7,13);
	var maxhps_e1   = maxhps.slice(7,13);

	var nowhps_f2   = nowhps_cb.slice(1,7);
	var maxhps_f2   = maxhps_cb.slice(1,7);
	var nowhps_e2   = nowhps_cb.slice(7,13);
	var maxhps_e2   = maxhps_cb.slice(7,13);

	var damage_f1   = [0,0,0,0,0,0];
	var damage_e1   = [0,0,0,0,0,0];
	var damage_f2   = [0,0,0,0,0,0];
	var damage_e2   = [0,0,0,0,0,0];

	var ydamage_1   = [0,0,0,0,0,0];
	var ydamage_2   = [0,0,0,0,0,0];
	var ydamage_k   = 0;

	function getStartHPs(fe) {
		if (!start_hps) return [];
		switch (fe) {
			case _f1_: return start_hps[0];
			case _e1_: return start_hps[1];
			case _f2_: return start_hps[2];
			case _e2_: return start_hps[3];
		}
	}

	function getNowHPs(fe) {
		switch (fe) {
			case _f1_: return nowhps_f1;
			case _e1_: return nowhps_e1;
			case _f2_: return nowhps_f2;
			case _e2_: return nowhps_e2;
		}
	}

	function getMaxHPs(fe) {
		switch (fe) {
			case _f1_: return maxhps_f1;
			case _e1_: return maxhps_e1;
			case _f2_: return maxhps_f2;
			case _e2_: return maxhps_e2;
		}
	}

	function getDamage(fe) {
		switch (fe) {
			case _f1_: return damage_f1;
			case _e1_: return damage_e1;
			case _f2_: return damage_f2;
			case _e2_: return damage_e2;
		}
	}

	function getYodame(fe) {
		switch (fe) {
			case _f1_: return ydamage_1;
			case _f2_: return ydamage_2;
		}
	}

	function initDamage(ms, ds) {
		for (var i = 0, len = ds.length; i < len; i++) {
			var m = ms[i];
			if (m === -1 || typeof m === 'undefined') ds[i] = -1;
		}
	}

	initDamage(maxhps_f1, damage_f1);
	initDamage(maxhps_e1, damage_e1);
	initDamage(maxhps_f2, damage_f2);
	initDamage(maxhps_e2, damage_e2);

	initDamage(maxhps_f1, ydamage_1);
	initDamage(maxhps_f2, ydamage_2);

	function calcDamageKoukuu(kouku) {
		if (!kouku) return;
		var stage3 = kouku.api_stage3;
		if (!stage3) return;

		var fs = stage3.api_fdam.slice(1);
		var es = stage3.api_edam.slice(1);

		for (var i = 0, len = fs.length; i < len; i++) {
			var f = fs[i];
			var e = es[i];
			f = Math.floor(f);
			e = Math.floor(e);
			damage_f1[i] += f;
			damage_e1[i] += e;
			ydamage_k    += e;
		}
	}

	function calcDamageKoukuuC(kouku) {
		if (!kouku) return;
		var stage3_cb = kouku.api_stage3_combined;
		if (!stage3_cb) return;

		var fs = stage3_cb.api_fdam.slice(1);

		for (var i = 0, len = fs.length; i < len; i++) {
			var f = fs[i];
			f = Math.floor(f);
			damage_f2[i] += f;
		}
	}

	function calcDamageShien() {
		if (!support) return;

		var sp_airattack = support.api_support_airatack || {};
		var sp_stage3    = sp_airattack.api_stage3;
		if (sp_stage3) {
			var es = sp_stage3.api_edam.slice(1);
			for (var i = 0, len = es.length; i < len; i++) {
				var e = es[i];
				e = Math.floor(e);
				damage_e1[i] += e;
			}
		}

		var sp_hourai = support.api_support_hourai;
		if (sp_hourai) {
			var es = sp_hourai.api_damage.slice(1);
			for (var i = 0, len = es.length; i < len; i++) {
				var e = es[i];
				e = Math.floor(e);
				damage_e1[i] += e;
			}
		}
	}

	function calcDamageHougeki(h, damage_fn, ydamage_n) {
		if (!h) return;

		var dmg_list = h.api_damage.slice(1);
		var def_list = h.api_df_list.slice(1);
		var atk_list = h.api_at_list.slice(1);

		for (var i = 0, len = dmg_list.length; i < len; i++) {
			var dmgs = dmg_list[i];
			var defs = def_list[i];
			var atk  = atk_list[i];
			for (var j = 0, l = dmgs.length; j < l; j++) {
				var dmg = dmgs[j];
				var def = defs[j];
				dmg = Math.floor(dmg);
				if (1 <= def && def <=  6) damage_fn[def-1] += dmg;
				if (7 <= def && def <= 12) damage_e1[def-7] += dmg;
				if (1 <= atk && atk <=  6) ydamage_n[atk-1] += dmg;
			}
		}
	}

	function calcDamageRaigeki(r, damage_fn, ydamage_n) {
		if (!r) return;

		var fs = r.api_fdam.slice(1);
		var es = r.api_edam.slice(1);
		var ys = r.api_fydam.slice(1);

		for (var i = 0, len = fs.length; i < len; i++) {
			var f = fs[i];
			var e = es[i];
			var y = ys[i];
			f = Math.floor(f);
			e = Math.floor(e);
			y = Math.floor(y);
			damage_fn[i] += f;
			damage_e1[i] += e;
			ydamage_n[i] += y;
		}
	}

	calcDamageKoukuu (kouku1);
	calcDamageKoukuuC(kouku1);
	calcDamageKoukuu (kouku2);
	calcDamageKoukuuC(kouku2);
	calcDamageShien();
	switch (type) {
	case _n_:
		calcDamageHougeki(hougeki1,  damage_f1, ydamage_1);
		calcDamageHougeki(hougeki2,  damage_f1, ydamage_1);
		calcDamageHougeki(hougeki8,  damage_f1, ydamage_1);
		calcDamageRaigeki(op_attack, damage_f1, ydamage_1);
		calcDamageRaigeki(raigeki,   damage_f1, ydamage_1);
		break;
	case _a_:
		calcDamageHougeki(hougeki1,  damage_f2, ydamage_2);
		calcDamageHougeki(hougeki2,  damage_f1, ydamage_1);
		calcDamageHougeki(hougeki3,  damage_f1, ydamage_1);
		calcDamageHougeki(hougeki8,  damage_f2, ydamage_2);
		calcDamageRaigeki(op_attack, damage_f2, ydamage_2);
		calcDamageRaigeki(raigeki,   damage_f2, ydamage_2);
		break;
	case _w_:
		calcDamageHougeki(hougeki1,  damage_f1, ydamage_1);
		calcDamageHougeki(hougeki2,  damage_f1, ydamage_1);
		calcDamageHougeki(hougeki3,  damage_f2, ydamage_2);
		calcDamageHougeki(hougeki8,  damage_f2, ydamage_2);
		calcDamageRaigeki(op_attack, damage_f2, ydamage_2);
		calcDamageRaigeki(raigeki,   damage_f2, ydamage_2);
		break;
	case _m_:
		calcDamageHougeki(hougeki8,  damage_f2, ydamage_2);
		break;
	}

	var damage_rate_f = 0;
	var damage_rate_e = 0;

	function calcSongai(fe) {
		var ns = getNowHPs(fe);
		var ds = getDamage(fe);

		var n_sum = 0;
		var d_sum = 0;

		for (var i = 0, len = ns.length; i < len; i++) {
			var n = ns[i];
			var d = ds[i];
			if (n === -1) break;

			d = (d > n) ? n : d;
			n_sum += n;
			d_sum += d;
		}

		var s_sum = 0;
		var ss = getStartHPs(fe);
		for (var i = 0, len = ss.length; i < len; i++) {
			var s = ss[i];
			if (s === -1) break;
			s_sum += s;
		}
		if (s_sum > 0) n_sum = s_sum;

		return (n_sum === 0) ? 0 : d_sum / n_sum;
	}

	damage_rate_f = calcSongai(_f1_) + calcSongai(_f2_);
	damage_rate_e = calcSongai(_e1_) + calcSongai(_e2_);

	return {
		F1: _f1_,
		E1: _e1_,
		F2: _f2_,
		E2: _e2_,

		getJinkei: function (fe) {
			if (!formation) return '';
			var n = formation[fe];
			n = parseInt(n, 10);
			return JINKEI[n] || '';
		},

		getKaiteki: function () {
			if (!formation) return '';
			var n = formation[2];
			return KAITEKI[n] || '';
		},

		getSakuteki: function (fe) {
			if (!search) return '';
			var n = search[fe];
			return (SAKUTEKI[n] || '') + '(' + n + ')';
		},

		getSeiku: function () {
			var stage1 =
				(kouku1) ? kouku1.api_stage1 :
				(kouku2) ? kouku2.api_stage1 :
				null;
			if (!stage1) return '';

			var seiku = stage1.api_disp_seiku;
			var n = seiku;
			return SEIKU[n] || '';
		},

		getShokusetsu: function (k, fe) {
			var kouku =
				(k === 1) ? kouku1 :
				(k === 2) ? kouku2 :
				null;
			var o = (kouku) ? kouku.api_stage1 : (k === 1) ? data : null;
			if (!o) return '';

			var touch_plane = o.api_touch_plane;
			if (!touch_plane) return '';
			var n = touch_plane[fe];
			return (n === -1) ? 'なし' : ('あり' + '(' + n + ')');
		},

		getStageLost: function (k, s, fe) {
			var kouku =
				(k === 1) ? kouku1 :
				(k === 2) ? kouku2 :
				null;
			if (!kouku) return '';

			var stage =
				(s === 1) ? kouku.api_stage1 :
				(s === 2) ? kouku.api_stage2 :
				null;
			if (!stage) return '';

			switch (fe) {
			case _f1_:
				return (stage.api_f_count === 0) ? '' :
					stage.api_f_lostcount + '/' + stage.api_f_count;
			case _e1_:
				return (stage.api_e_count === 0) ? '' :
					stage.api_e_lostcount + '/' + stage.api_e_count;
			default:
				return '';
			}
		},

		getHPs: function (fe, i) {
			var ns = getNowHPs(fe);
			var ms = getMaxHPs(fe);
			var n = ns[i];
			var m = ms[i];
			m = (typeof m === 'undefined') ? -1 : m;
			return [n, m];
		},

		getHPe: function (fe, i) {
			var ns = getNowHPs(fe);
			var ms = getMaxHPs(fe);
			var ds = getDamage(fe);
			var n = ns[i];
			var m = ms[i];
			var d = ds[i];
			n = (d > n) ? 0 : n - d;
			m = (typeof m === 'undefined') ? -1 : m;
			return [n, m];
		},

		getDmg: function (fe, i) {
			var ds = getDamage(fe);
			var d = ds[i];
			return d;
		},

		getYdm: function (fe, i) {
			var ds = getYodame(fe);
			var d = ds[i];
			return d;
		},

		getStartHPs: function () {
			return  [
				nowhps_f1,
				nowhps_e1,
				nowhps_f2,
				nowhps_e2
			];
		},

		getDmgY: function () {
			return [
				ydamage_1,
				ydamage_2,
				ydamage_k
			];
		},

		addDmgY: function (d) {
			var d1 = d[0];
			var d2 = d[1];
			var dk = d[2];

			for (var i = 0, len = d1.length; i < len; i++) {
				var d = d1[i];
				if (d === -1) break;
				ydamage_1[i] += d;
			}

			for (var i = 0, len = d2.length; i < len; i++) {
				var d = d2[i];
				if (d === -1) break;
				ydamage_2[i] += d;
			}

			ydamage_k += dk;
		},

		getRate: function () {
			return [
				damage_rate_f,
				damage_rate_e
			];
		},

		addRate: function (r) {
			var rf = r[0];
			var re = r[1];

			damage_rate_f += rf;
			damage_rate_e += re;
		},

		getSongaiF: function () {
			return (Math.round(damage_rate_f * 100 * 10) / 10) + '%';
		},

		getSongaiE: function () {
			return (Math.round(damage_rate_e * 100 * 10) / 10) + '%';
		},

		getBairitsu: function () {
			var fe_ratio =
				(damage_rate_e === 0) ? 'lose' :
				(damage_rate_f === 0) ? 'win'  :
				damage_rate_e / damage_rate_f;

			return (typeof fe_ratio === 'string') ? fe_ratio :
				Math.floor(fe_ratio * 10) / 10;
		},

		getMVP1: function () {
			return ydamage_1.indexOf(Math.max.apply(null, ydamage_1)) + 1;
		},

		getMVP2: function () {
			if (maxhps_cb.length === 0) return '';
			return ydamage_2.indexOf(Math.max.apply(null, ydamage_2)) + 1;
		},

		getDmgK: function () {
			return ydamage_k;
		}
	};
};

