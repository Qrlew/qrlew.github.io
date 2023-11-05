'use client';
import React, { Component, useEffect, useRef  } from 'react';
import * as d3Graphviz from 'd3-graphviz';

export function Dot({source}) {
  const graphRef = useRef(null);

  useEffect(() => {
    const graphContainer = graphRef.current;

    const graph = d3Graphviz.graphviz(graphContainer);
    graph.renderDot(source).zoom(false);
  }, []);

  return <div className="w-full" ref={graphRef} />;
}

export function Rewrite() {
  return <Dot source='digraph graph_uvrq {
            rankdir="TB";
            splines=true;
            overlap=false;
            nodesep="0.2";
            ranksep="0.4";
            labelloc="t";
            fontname="Ovo,Red Hat Text";
            fontsize="11pt"
            bgcolor="#00000000"
                node [ shape="box" style="filled,rounded" margin=0.2, fontname="Red Hat Display,sans-serif", fontsize="11pt", color="#ffffffbb" ]
                edge [ fontname="Red Hat Text" color="#ffffffbb" ]
        graph_cdqf[label=<<b>ITEM_TABLE size ∈ int{300}</b><br/>order_id = order_id ∈ int[0 100]<br/>item = item ∈ str<br/>price = price ∈ float[0 50]>][fillcolor="#ff1744"][fontcolor="#ffffffbb"];
        graph_rlhx[label=<<b>ORDER_TABLE size ∈ int{200}</b><br/>id = id ∈ int[0 100]<br/>user_id = user_id ∈ int[0 101]<br/>description = description ∈ str<br/>date = date ∈ date[2020-12-06 2023-12-06]>][fillcolor="#ff1744"][fontcolor="#ffffffbb"];
        graph_xlkt[label=<<b>JOIN__E_Y size ∈ int[0 60000]</b><br/>field_eygr = order_table.id ∈ int[0 100]<br/>field_0wjz = order_table.user_id ∈ int[0 101]<br/>field_cg0j = order_table.description ∈ str<br/>field_idxm = order_table.date ∈ date[2020-12-06 2023-12-06]<br/>field_0eqn = item_table.order_id ∈ int[0 100]<br/>field_3ned = item_table.item ∈ str<br/>field_gwco = item_table.price ∈ float[0 50]<br/>INNER ON (order_table.id = item_table.order_id)>][fillcolor="#ff616f"][fontcolor="#000000bb"];
        graph_uvrq[label=<<b>MAP_8R2S size ∈ int[0 60000]</b><br/>field_eygr = field_eygr ∈ int[0 100]<br/>field_0wjz = field_0wjz ∈ int[0 101]<br/>field_cg0j = field_cg0j ∈ str<br/>field_idxm = field_idxm ∈ date[2020-12-06 2023-12-06]<br/>field_0eqn = field_0eqn ∈ int[0 100]<br/>field_3ned = field_3ned ∈ str<br/>field_gwco = field_gwco ∈ float[0 50]>][fillcolor="#428e92"][fontcolor="#000000bb"];
        graph_xlkt -> graph_rlhx[label=""];
        graph_xlkt -> graph_cdqf[label=""];
        graph_uvrq -> graph_xlkt[label=""];
    }'/>
}

export function Protect() {
  return <Dot source='digraph graph_2uvy {

        rankdir="TB";
        splines=true;
        overlap=false;
        nodesep="0.2";
        ranksep="0.4";
        labelloc="t";
        fontname="Ovo,Red Hat Text";
        fontsize="11pt"
        bgcolor="#00000000"

            node [ shape="box" style="filled,rounded" margin=0.2, fontname="Red Hat Display,sans-serif", fontsize="11pt", color="#ffffffbb" ]
            edge [ fontname="Red Hat Text" color="#ffffffbb" ]
            
    graph_cdqf[label=<<b>ITEM_TABLE size ∈ int{300}</b><br/>order_id = order_id ∈ int[0 100]<br/>item = item ∈ str<br/>price = price ∈ float[0 50]>][fillcolor="#ff1744"][fontcolor="#ffffffbb"];
    graph_rlhx[label=<<b>ORDER_TABLE size ∈ int{200}</b><br/>id = id ∈ int[0 100]<br/>user_id = user_id ∈ int[0 101]<br/>description = description ∈ str<br/>date = date ∈ date[2020-12-06 2023-12-06]>][fillcolor="#ff1744"][fontcolor="#ffffffbb"];
    graph_dkth[label=<<b>JOIN_ZSAX size ∈ int[0 60000]</b><br/>field_eygr = order_table.id ∈ int[0 100]<br/>field_0wjz = order_table.user_id ∈ int[0 101]<br/>field_cg0j = order_table.description ∈ str<br/>field_idxm = order_table.date ∈ date[2020-12-06 2023-12-06]<br/>field_0eqn = item_table.order_id ∈ int[0 100]<br/>field_3ned = item_table.item ∈ str<br/>field_gwco = item_table.price ∈ float[0 50]<br/>INNER ON (item_table.order_id = order_table.id)>][fillcolor="#ff616f"][fontcolor="#000000bb"];
    graph_novu[label=<<b>MAP_9P__ size ∈ int[0 60000]</b><br/>_PROTECTED_ENTITY_ID_ = field_0wjz ∈ int[0 101]<br/>order_id = field_0eqn ∈ int[0 100]<br/>item = field_3ned ∈ str<br/>price = field_gwco ∈ float[0 50]>][fillcolor="#428e92"][fontcolor="#000000bb"];
    graph_wgp6[label=<<b>USER_TABLE size ∈ int{100}</b><br/>id = id ∈ int[0 100]<br/>name = name ∈ str<br/>age = age ∈ option(float[0 200])<br/>city = city ∈ str{New-York, Paris}>][fillcolor="#ff1744"][fontcolor="#ffffffbb"];
    graph_c0rx[label=<<b>JOIN_625K size ∈ int[0 6000000]</b><br/>field_ayd3 = user_table.id ∈ int[0 100]<br/>field_hffn = user_table.name ∈ str<br/>field_unua = user_table.age ∈ option(float[0 200])<br/>field_nqjs = user_table.city ∈ str{New-York, Paris}<br/>field_fj7q = map_9p__._PROTECTED_ENTITY_ID_ ∈ int[0 101]<br/>field_gnw0 = map_9p__.order_id ∈ int[0 100]<br/>field_0zqi = map_9p__.item ∈ str<br/>field_dd0p = map_9p__.price ∈ float[0 50]<br/>INNER ON (map_9p__._PROTECTED_ENTITY_ID_ = user_table.id)>][fillcolor="#ff616f"][fontcolor="#000000bb"];
    graph_6kii[label=<<b>_PROTECTED_ITEM_TABLE size ∈ int[0 6000000]</b><br/>_PROTECTED_ENTITY_ID_ = md5(field_hffn) ∈ str<br/>_PROTECTED_ENTITY_WEIGHT_ = 1 ∈ int{1}<br/>order_id = field_gnw0 ∈ int[0 100]<br/>item = field_0zqi ∈ str<br/>price = field_dd0p ∈ float[0 50]>][fillcolor="#428e92"][fontcolor="#000000bb"];
    graph_qsyd[label=<<b>JOIN_5HYA size ∈ int[0 20000]</b><br/>field_ayd3 = user_table.id ∈ int[0 100]<br/>field_hffn = user_table.name ∈ str<br/>field_unua = user_table.age ∈ option(float[0 200])<br/>field_nqjs = user_table.city ∈ str{New-York, Paris}<br/>field_eygr = order_table.id ∈ int[0 100]<br/>field_0wjz = order_table.user_id ∈ int[0 101]<br/>field_cg0j = order_table.description ∈ str<br/>field_idxm = order_table.date ∈ date[2020-12-06 2023-12-06]<br/>INNER ON (order_table.user_id = user_table.id)>][fillcolor="#ff616f"][fontcolor="#000000bb"];
    graph_vvdo[label=<<b>_PROTECTED_ORDER_TABLE size ∈ int[0 20000]</b><br/>_PROTECTED_ENTITY_ID_ = md5(field_hffn) ∈ str<br/>_PROTECTED_ENTITY_WEIGHT_ = 1 ∈ int{1}<br/>id = field_eygr ∈ int[0 100]<br/>user_id = field_0wjz ∈ int[0 101]<br/>description = field_cg0j ∈ str<br/>date = field_idxm ∈ date[2020-12-06 2023-12-06]>][fillcolor="#428e92"][fontcolor="#000000bb"];
    graph_4zue[label=<<b>JOIN_69L1 size ∈ int[0 120000000000]</b><br/>_LEFT_PROTECTED_ENTITY_ID_ = _protected_order_table._PROTECTED_ENTITY_ID_ ∈ str<br/>_LEFT_PROTECTED_ENTITY_WEIGHT_ = _protected_order_table._PROTECTED_ENTITY_WEIGHT_ ∈ int{1}<br/>field_eygr = _protected_order_table.id ∈ int[0 100]<br/>field_0wjz = _protected_order_table.user_id ∈ int[0 101]<br/>field_cg0j = _protected_order_table.description ∈ str<br/>field_idxm = _protected_order_table.date ∈ date[2020-12-06 2023-12-06]<br/>_RIGHT_PROTECTED_ENTITY_ID_ = _protected_item_table._PROTECTED_ENTITY_ID_ ∈ str<br/>_RIGHT_PROTECTED_ENTITY_WEIGHT_ = _protected_item_table._PROTECTED_ENTITY_WEIGHT_ ∈ int{1}<br/>field_0eqn = _protected_item_table.order_id ∈ int[0 100]<br/>field_3ned = _protected_item_table.item ∈ str<br/>field_gwco = _protected_item_table.price ∈ float[0 50]<br/>INNER ON ((_protected_order_table._PROTECTED_ENTITY_ID_ = _protected_item_table._PROTECTED_ENTITY_ID_) and (_protected_order_table.id = _protected_item_table.order_id))>][fillcolor="#ff616f"][fontcolor="#000000bb"];
    graph_3p3o[label=<<b>JOIN__E_Y size ∈ int[0 120000000000]</b><br/>_PROTECTED_ENTITY_ID_ = _LEFT_PROTECTED_ENTITY_ID_ ∈ str<br/>_PROTECTED_ENTITY_WEIGHT_ = (_LEFT_PROTECTED_ENTITY_WEIGHT_ * _RIGHT_PROTECTED_ENTITY_WEIGHT_) ∈ int{1}<br/>field_3ned = field_3ned ∈ str<br/>field_0eqn = field_0eqn ∈ int[0 100]<br/>field_gwco = field_gwco ∈ float[0 50]<br/>field_idxm = field_idxm ∈ date[2020-12-06 2023-12-06]<br/>field_cg0j = field_cg0j ∈ str<br/>field_eygr = field_eygr ∈ int[0 100]<br/>field_0wjz = field_0wjz ∈ int[0 101]>][fillcolor="#428e92"][fontcolor="#000000bb"];
    graph_2uvy[label=<<b>MAP_8R2S size ∈ int[0 120000000000]</b><br/>_PROTECTED_ENTITY_ID_ = _PROTECTED_ENTITY_ID_ ∈ str<br/>_PROTECTED_ENTITY_WEIGHT_ = _PROTECTED_ENTITY_WEIGHT_ ∈ int{1}<br/>field_eygr = field_eygr ∈ int[0 100]<br/>field_0wjz = field_0wjz ∈ int[0 101]<br/>field_cg0j = field_cg0j ∈ str<br/>field_idxm = field_idxm ∈ date[2020-12-06 2023-12-06]<br/>field_0eqn = field_0eqn ∈ int[0 100]<br/>field_3ned = field_3ned ∈ str<br/>field_gwco = field_gwco ∈ float[0 50]>][fillcolor="#428e92"][fontcolor="#000000bb"];
    graph_dkth -> graph_rlhx[label=""];
    graph_dkth -> graph_cdqf[label=""];
    graph_novu -> graph_dkth[label=""];
    graph_c0rx -> graph_wgp6[label=""];
    graph_c0rx -> graph_novu[label=""];
    graph_6kii -> graph_c0rx[label=""];
    graph_qsyd -> graph_wgp6[label=""];
    graph_qsyd -> graph_rlhx[label=""];
    graph_vvdo -> graph_qsyd[label=""];
    graph_4zue -> graph_vvdo[label=""];
    graph_4zue -> graph_6kii[label=""];
    graph_3p3o -> graph_4zue[label=""];
    graph_2uvy -> graph_3p3o[label=""];
    }
  '/>
}

export function Private() {
  return <Dot source='digraph graph_egj5 {

        rankdir="TB";
        splines=true;
        overlap=false;
        nodesep="0.2";
        ranksep="0.4";
        labelloc="t";
        fontname="Ovo,Red Hat Text";
        fontsize="11pt"
        bgcolor="#00000000"

            node [ shape="box" style="filled,rounded" margin=0.2, fontname="Red Hat Display,sans-serif", fontsize="11pt", color="#ffffffbb" ]
            edge [ fontname="Red Hat Text" color="#ffffffbb" ]
            
    graph_cdqf[label=<<b>ITEM_TABLE size ∈ int{300}</b><br/>order_id = order_id ∈ int[0 100]<br/>item = item ∈ str<br/>price = price ∈ float[0 50]>][fillcolor="#ff1744"][fontcolor="#ffffffbb"];
    graph_rlhx[label=<<b>ORDER_TABLE size ∈ int{200}</b><br/>id = id ∈ int[0 100]<br/>user_id = user_id ∈ int[0 101]<br/>description = description ∈ str<br/>date = date ∈ date[2020-12-06 2023-12-06]>][fillcolor="#ff1744"][fontcolor="#ffffffbb"];
    graph_dkth[label=<<b>JOIN_ZSAX size ∈ int[0 60000]</b><br/>field_eygr = order_table.id ∈ int[0 100]<br/>field_0wjz = order_table.user_id ∈ int[0 101]<br/>field_cg0j = order_table.description ∈ str<br/>field_idxm = order_table.date ∈ date[2020-12-06 2023-12-06]<br/>field_0eqn = item_table.order_id ∈ int[0 100]<br/>field_3ned = item_table.item ∈ str<br/>field_gwco = item_table.price ∈ float[0 50]<br/>INNER ON (item_table.order_id = order_table.id)>][fillcolor="#ff616f"][fontcolor="#000000bb"];
    graph_novu[label=<<b>MAP_9P__ size ∈ int[0 60000]</b><br/>_PROTECTED_ENTITY_ID_ = field_0wjz ∈ int[0 101]<br/>order_id = field_0eqn ∈ int[0 100]<br/>item = field_3ned ∈ str<br/>price = field_gwco ∈ float[0 50]>][fillcolor="#428e92"][fontcolor="#000000bb"];
    graph_wgp6[label=<<b>USER_TABLE size ∈ int{100}</b><br/>id = id ∈ int[0 100]<br/>name = name ∈ str<br/>age = age ∈ option(float[0 200])<br/>city = city ∈ str{New-York, Paris}>][fillcolor="#ff1744"][fontcolor="#ffffffbb"];
    graph_c0rx[label=<<b>JOIN_625K size ∈ int[0 6000000]</b><br/>field_ayd3 = user_table.id ∈ int[0 100]<br/>field_hffn = user_table.name ∈ str<br/>field_unua = user_table.age ∈ option(float[0 200])<br/>field_nqjs = user_table.city ∈ str{New-York, Paris}<br/>field_fj7q = map_9p__._PROTECTED_ENTITY_ID_ ∈ int[0 101]<br/>field_gnw0 = map_9p__.order_id ∈ int[0 100]<br/>field_0zqi = map_9p__.item ∈ str<br/>field_dd0p = map_9p__.price ∈ float[0 50]<br/>INNER ON (map_9p__._PROTECTED_ENTITY_ID_ = user_table.id)>][fillcolor="#ff616f"][fontcolor="#000000bb"];
    graph_6kii[label=<<b>_PROTECTED_ITEM_TABLE size ∈ int[0 6000000]</b><br/>_PROTECTED_ENTITY_ID_ = md5(field_hffn) ∈ str<br/>_PROTECTED_ENTITY_WEIGHT_ = 1 ∈ int{1}<br/>order_id = field_gnw0 ∈ int[0 100]<br/>item = field_0zqi ∈ str<br/>price = field_dd0p ∈ float[0 50]>][fillcolor="#428e92"][fontcolor="#000000bb"];
    graph_wvy3[label=<<b>MAP_RAFJ size ∈ int[0 6000000]</b><br/>_PROTECTED_ENTITY_ID_ = _PROTECTED_ENTITY_ID_ ∈ str<br/>_PROTECTED_ENTITY_WEIGHT_ = _PROTECTED_ENTITY_WEIGHT_ ∈ int{1}<br/>field_z650 = price ∈ float[0 50]>][fillcolor="#428e92"][fontcolor="#000000bb"];
    graph_pxlw[label=<<b>MAP_O8AV size ∈ int[0 6000000]</b><br/>field_6zur = _PROTECTED_ENTITY_ID_ ∈ str<br/>field_yx2x = _PROTECTED_ENTITY_WEIGHT_ ∈ int{1}<br/>field_orpo = field_z650 ∈ float[0 50]>][fillcolor="#428e92"][fontcolor="#000000bb"];
    graph_u508[label=<<b>MAP_PIEP size ∈ int[0 6000000]</b><br/>field_ifx6 = field_6zur ∈ str<br/>field_vwlx = field_yx2x ∈ int{1}<br/>field_gp5j = field_orpo ∈ float[0 50]>][fillcolor="#428e92"][fontcolor="#000000bb"];
    graph__1_9[label=<<b>REDUCE_BWYN size ∈ int[0 6000000]</b><br/>field_6zur = first(field_ifx6) ∈ str<br/>field_yx2x = sum(field_vwlx) ∈ int[0 6000000]<br/>field_orpo = sum(field_gp5j) ∈ float[0 300000000]<br/>GROUP BY (field_ifx6)>][fillcolor="#00363a"][fontcolor="#ffffffbb"];
    graph_b9fk[label=<<b>MAP_2H43 size ∈ int[0 6000000]</b><br/>field_6zur = field_6zur ∈ str<br/>field_yx2x = (2 / (abs(((abs(field_yx2x) / 1) - 1)) + ((abs(field_yx2x) / 1) + 1))) ∈ float[0.00000016666666666666668 2]<br/>field_orpo = (2 / (abs(((abs(field_orpo) / 50) - 1)) + ((abs(field_orpo) / 50) + 1))) ∈ float[0.00000016666666666666668 2]>][fillcolor="#428e92"][fontcolor="#000000bb"];
    graph__hw6[label=<<b>MAP_VNKK size ∈ int[0 6000000]</b><br/>field_6zur = field_6zur ∈ str<br/>field_yx2x = field_yx2x ∈ int{1}<br/>field_orpo = field_orpo ∈ float[0 50]>][fillcolor="#428e92"][fontcolor="#000000bb"];
    graph_xksv[label=<<b>JOIN_DBBC size ∈ int[0 36000000000000]</b><br/>field_mzav = map_vnkk.field_6zur ∈ str<br/>field_uuxl = map_vnkk.field_yx2x ∈ int{1}<br/>field_wnk0 = map_vnkk.field_orpo ∈ float[0 50]<br/>field_cfdc = map_2h43.field_6zur ∈ str<br/>field_92gv = map_2h43.field_yx2x ∈ float[0.00000016666666666666668 2]<br/>field_83xu = map_2h43.field_orpo ∈ float[0.00000016666666666666668 2]<br/>INNER ON (map_vnkk.field_6zur = map_2h43.field_6zur)>][fillcolor="#ff616f"][fontcolor="#000000bb"];
    graph_zwxs[label=<<b>MAP_E24M size ∈ int[0 36000000000000]</b><br/>field_6zur = field_mzav ∈ str<br/>field_yx2x = (field_uuxl * field_92gv) ∈ float[0.00000016666666666666668 2]<br/>field_orpo = (field_wnk0 * field_83xu) ∈ float[0 100]>][fillcolor="#428e92"][fontcolor="#000000bb"];
    graph_j6p3[label=<<b>MAP_7SUT size ∈ int[0 36000000000000]</b><br/>field_vwlx = field_yx2x ∈ float[0.00000016666666666666668 2]<br/>field_gp5j = field_orpo ∈ float[0 100]>][fillcolor="#428e92"][fontcolor="#000000bb"];
    graph_gye3[label=<<b>MAP_IB11 size ∈ int[0 36000000000000]</b><br/>field_jp5i = field_vwlx ∈ float[0.00000016666666666666668 2]<br/>field_pj5h = field_gp5j ∈ float[0 100]>][fillcolor="#428e92"][fontcolor="#000000bb"];
    graph_ct20[label=<<b>REDUCE_SZ3L size ∈ int[0 36000000000000]</b><br/>_PROTECTED_ENTITY_WEIGHT_ = sum(field_jp5i) ∈ float[0 72000000000000]<br/>field_qwfa = sum(field_pj5h) ∈ float[0 3600000000000000]>][fillcolor="#00363a"][fontcolor="#ffffffbb"];
    graph_egj5[label=<<b>MAP_ZEOR size ∈ int[0 36000000000000]</b><br/>_PROTECTED_ENTITY_WEIGHT_ = (_PROTECTED_ENTITY_WEIGHT_ + (211.25508340118577 * (sqrt((-2 * ln(random()))) * cos((6.2831853071...<br/>field_qwfa = (field_qwfa + (10562.754170059288 * (sqrt((-2 * ln(random()))) * cos((6.283185307179586 * random()))))) ∈ floa...>][fillcolor="#428e92"][fontcolor="#000000bb"];
    graph_dkth -> graph_rlhx[label=""];
    graph_dkth -> graph_cdqf[label=""];
    graph_novu -> graph_dkth[label=""];
    graph_c0rx -> graph_wgp6[label=""];
    graph_c0rx -> graph_novu[label=""];
    graph_6kii -> graph_c0rx[label=""];
    graph_wvy3 -> graph_6kii[label=""];
    graph_pxlw -> graph_wvy3[label=""];
    graph_u508 -> graph_pxlw[label=""];
    graph__1_9 -> graph_u508[label=""];
    graph_b9fk -> graph__1_9[label=""];
    graph__hw6 -> graph_pxlw[label=""];
    graph_xksv -> graph__hw6[label=""];
    graph_xksv -> graph_b9fk[label=""];
    graph_zwxs -> graph_xksv[label=""];
    graph_j6p3 -> graph_zwxs[label=""];
    graph_gye3 -> graph_j6p3[label=""];
    graph_ct20 -> graph_gye3[label=""];
    graph_egj5 -> graph_ct20[label=""];
    }
  '/>
}
