"use client";
import React, { Component } from 'react';
import * as d3 from 'd3'
import 'd3-graphviz';

class Simple extends Component {
    ref() {
        d3.select(".dot-simple").graphviz().renderDot(`digraph graph_uvrq {
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
    }`);
    }

    render() {
        return (
          <div className="dot-simple h-full" ref={this.ref} style={{height: "100%", width: "100%"}}/>
        )
      }
}

class Other extends Component {
  ref() {
      d3.select(".dot-other").graphviz().renderDot(`digraph graph_uvrq {
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
  }`);
  }

  render() {
      return (
        <div className="dot-other h-full" ref={this.ref}/>
      )
    }
}

export {
  Simple,
  Other,
}