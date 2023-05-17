import React from 'react'
import moment from 'moment-timezone';
// import 'moment/locale/pt-br';
const Moment = () => {
    const m=moment();
     m.utc()
      m.local()
     m.utcOffset("+03:00")
    var m1= moment.utc().format(); 
    var g=moment.locale(''); 
    var zone = moment.tz.guess();
    var abbr = moment.tz(zone).format("z");
    var fromnow= moment("20170601", "YYYYMMDD").fromNow();
    var starthour=moment().startOf('hour').fromNow();  
    var endOfhour=moment().endOf('hour').fromNow();  
    var startOfday=moment().startOf('day').fromNow();  
    var endOfday=moment().endOf('day').fromNow();  
    var calendar=moment().subtract(2, 'days').calendar();
    var calenderDay=moment().add(12, 'days').calendar();
    var abc=moment().format('lll'); 
    var strings=moment("2010-10-20 4:30", "YYYY-MM-DD HH:mm");  
    var strings=moment("2010-10-20 4:30 +0000", "YYYY-MM-DD HH:mm Z");  
    var day = moment.unix(1318781876);
    var utc = new Date().setUTCSeconds(30);
    var utcc = moment.utc().valueOf();
    var utcoffset=moment.parseZone("2013-03-07T07:00:00+03:00").utcOffset()
  
    console.log("m",m.toString());
    console.log("m1",m1);
    console.log("zone",zone);
    console.log("abbr",abbr);
    console.log("starthour",starthour);
    console.log("endOfhour",endOfhour);
    console.log("startOfday",startOfday);
    console.log("endOfday",endOfday);
    console.log("calendar",calendar);
    console.log("calenderDay",calenderDay);
    console.log("g",g);
    console.log("abc",abc);
    console.log("string",strings.toISOString());
    console.log("string",strings.toString());
    console.log("day",day.toISOString());
    console.log("utc",utc.toString());
    console.log("utcc",utcc.toString());
    console.log("utcoffset",utcoffset.toString());
  return (
      <>
    <div>Moment{zone}</div>
    <div>abbr{abbr}</div>
    </>
  )
}

export default Moment;