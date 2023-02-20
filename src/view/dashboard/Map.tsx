import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_indiaLow from "@amcharts/amcharts4-geodata/indiaLow";
import { useEffect } from "react";
import "../dashboard/Dashboard.styles.css";

const Chart = (props: any) => {
  useEffect(() => {
    let chart = am4core.create("chartdiv", am4maps.MapChart);

    chart.geodata = am4geodata_indiaLow;

    let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;

    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";

    polygonTemplate.fill = am4core.color("#154360");
    polygonTemplate.events.on("hit", (event: any) => {
      props.onClick(event.target.dataItem.dataContext.id);
    });

    polygonTemplate.events.on("over", (event: any) => {
      event.target.fill = am4core.color("#88CAE7");
    });
    polygonTemplate.events.on("out", (event: any) => {
      event.target.fill = am4core.color("#154360");
    });
    chart.zoomControl = new am4maps.ZoomControl();
    chart.zoomControl.align = "right";
    chart.zoomControl.marginRight = 15;
    chart.zoomControl.disabled = true;
    chart.seriesContainer.draggable = false;
    chart.seriesContainer.resizable = false;
    chart.maxZoomLevel = 1;
    chart.seriesContainer.events.disableType("doublehit");
    chart.chartContainer.background.events.disableType("doublehit");
    chart.logo.disabled = true;

    return () => {
      chart.dispose();
    };
  }, []);

  return <div data-aos="zoom-out-right" id="chartdiv" />;
};

export default Chart;
