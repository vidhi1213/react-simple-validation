
import React from "react";


import {
  ScheduleComponent,
  ViewDirective,
  Week,
  Resize,
  ExcelExport,
  DragAndDrop,
  Inject,
  Print
} from "@syncfusion/ej2-react-schedule";

export default function Schedule() {

  let someref;

  const onActionBegin = (args) => {
    if (args.requestType === "toolbarItemRendering") {
      let exportItem = {
        align: "Right",
        showTextOn: "Both",
        prefixIcon: "e-icon-schedule-print",
        text: "Print",
        cssClass: "e-schedule-print",
        click: onExportClick
      };
      args.items.push(exportItem);
    }
  };

  const onExportClick = () => {
    console.log("called");
    someref?.print();
  };

  return (
    <div className="App">
      <ScheduleComponent
        actionBegin={(e) => {
          onActionBegin(e);
        }}
        ref={(t) => {
          someref = t;
        }}
      >
        {/* <ViewsDirective>
          <ViewDirective option="Week" />
        </ViewsDirective> */}
        <Inject services={[Week, Resize, DragAndDrop, Print]} />
      </ScheduleComponent>
    </div>
  );
}
