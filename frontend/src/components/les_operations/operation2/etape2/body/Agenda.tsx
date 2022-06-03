import React from 'react';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import '../../../../../App.css';

const App = () => {
  let scheduleObj: ScheduleComponent = new ScheduleComponent({});
  let dataManager: DataManager = new DataManager({
    url: 'http://localhost:5000/GetData',
    crudUrl: 'http://localhost:5000/BatchData',
    adaptor: new UrlAdaptor(),
    crossDomain: true
  });

    return (
      <div className="control-section">
        <div className="schedule-control">
          <ScheduleComponent id="schedule" ref={(schedule: ScheduleComponent) => schedule = scheduleObj} height="550px"
            selectedDate={new Date(2017, 5, 5)} currentView="Week" eventSettings={{ dataSource: dataManager }}>
            <ViewsDirective>
              <ViewDirective option="Day" />
              <ViewDirective option="Week" />
              <ViewDirective option="WorkWeek" />
              <ViewDirective option="Month" />
              <ViewDirective option="Agenda" />
            </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
          </ScheduleComponent>
        </div>
      </div>
    );
  }


export default App;
