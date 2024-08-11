//#region TM
  // TM
  // Static holidays only

  // Rename each holiday closed name to something along the lines of:
  // Closed-holiday-(MONTH)-(DAY)
  // then a singular statement would suffice document.getElem...().src="closed-holiday-$(MONTH)-$(DAY)"
  // No lengthy switch statement needed.

  // This does bank upon the fact that it IS a holiday, though.


  // Make a list of int arrays
  // {{1,1}, {2,3}, {4,1}}
  // Each array is a month/day pair
  // Search this array for a match //TODO bool isItHoliday();
  // If it returns true, use previous method to find image to display.

  // Perks:
  // Adding a new holiday is easy
  // 1. Add {m,d} pair to holiday array
  // 2. Add closed-holiday-(M)-(D).jpg to images/ folder (maybe a sub directory such as images/holiday/ or images/closed/)
//#endregion

// https://www.freepik.com/free-photos-vectors/4th-of-july-closed

var checkOpenStatus = function () {
  //#region Find Date and Time Stamps
    let d = new Date();

    let second = d.getSeconds().toString().padStart(2, "0");
    let minute = d.getMinutes().toString().padStart(2, "0");
    let hour = d.getHours();
    let weekDay = d.getDay();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
  //#endregion

  //#region Months
    const January = 0;
    const February = 1;
    const March = 2;
    const April = 3;
    const May = 4; 
    const June = 5;
    const July = 6;
    const August = 7;
    const September = 8;
    const October = 9;
    const November = 10;
    const December = 11;
  //#endregion

  //#region Weeks
    const FirstWeek = 0;
    const SecondWeek = 1;
    const ThirdWeek = 2;
    const FourthWeek = 3;
    const LastWeek = -1;
  //#endregion

  //#region Weekdays
    const Sunday = 0;
    const Monday = 1;
    const Tuesday = 2;
    const Wednesday = 3;
    const Thursday = 4;
    const Friday = 5;
    const Saturday = 6;
  //#endregion

  //#region Static Holidays
    const NewYearsDay = `${January}/1`;
    const FourthOfJuly = `${July}/4`;
    const ChristmasDay = `${December}/25`;
    const VeteransDay = `${November}/11`;
    const Halloween = `${October}/31`;
    const ValentinesDay = `${February}/14`;
    const StPatricksDay = `${March}/17`;
    const CincoDeMayo = `${May}/5`;
    const Juneteenth = `${June}/19`;
  //#endregion

  //#region Open/Close Sign
    const openSign = '/images/sign-open-2.jpg';
    const closedSign = '/images/sign-closed-2.jpg';
  //#endregion

  //#region Static Holidays
    // const newYearsSign = '/images/holiday-new-years.jpg';
    const newYearsSign = '/images/holiday-new-years-2.jpg';

    // const fourthOfJulySign = '/images/holiday-fourth-of-july.jpg';
    const fourthOfJulySign = '/images/holiday-fourth-of-july-2.jpg';

    // const christmasSign = '/images/holiday-christmas.jpg';
    const christmasSign = '/images/holiday-christmas-2.jpg';

    const veteransDaySign = '/images/holiday-veterans-day.jpg';
    const halloweenSign = '/images/holiday-halloween.jpg';
    const valentinesSign = '/images/holiday-valentines-day.jpg';
    const stPatricksDaySign = '/images/holiday-st-patricks-day.jpg';
    const cincoDeMayoSign = '/images/holiday-cinco-de-mayo.jpg';
    const juneteenthSign = '/images/holiday-juneteenth.jpg';
  //#endregion

  //#region Non Static Holidays
    // const thanksgivingImg = '/images/holiday-thanksgiving.jpg';
    const thanksgivingImg = '/images/holiday-thanksgiving-2.jpg';


    const mothersDayImg = '/images/holiday-mothers-day.jpg';
    const fathersDayImg = '/images/holiday-fathers-day.jpg';

    // const memorialDayImg = '/images/holiday-memorial-day.jpg';
    const memorialDayImg = '/images/holiday-memorial-day-2.jpg';

    const laborDayImg = '/images/holiday-labor-day.jpg';
    const presidentDay ='/images/holiday-presidents-day.jpg';
    const martinLuterDay = '/images/holiday-martin-luther-day.jpg'; 
    const superBowl = '/images/holiday-super-bowl.jpg';
    const columbusDay = '/images/holiday-columbus-day.jpg';
  //#endregion

  //#region Complex Holidays
    const easterDay = '/images/holiday-easter-day.jpg';
  //#endregion

  //#region Open Status
    const openText = 'Yes we are Open. Come by and visit!';
    const closedText = 'Sorry we are closed. Please see the hours of operation below!';
    const openHoliday = 'Yes we are open. Come celebrate the holiday with us!';
    const closedHoliday = 'Sorry we are closed for holiday to let our staff be with family and friends. Happy holiday from us to you!';
  //#endregion

  //#region TEST
    // month = May;
    // weekDay = Monday;
    // date = 27;
    // year = 2024;
    // hour = 16;

    // console.log("weekday: " + weekDay);
    // console.log("Date: " + date);
    // console.log("Hour: " + hour);
  //#endregion

  function findRegularOperationalHours() {
    // Uses Military time frames
    switch (weekDay) {
      case Sunday:
        if (hour > 11 && hour < 20) {
          document.getElementById('open-close').src=openSign;
          document.getElementById('operation-status-text').textContent = openText;
        }
        else {
          document.getElementById('operation-status-text').textContent = closedText;
          document.getElementById('open-close').src=closedSign;
        }
        break;

      case Monday:
        if (hour > 10 && hour < 20) {
          document.getElementById('open-close').src=openSign;
          document.getElementById('operation-status-text').textContent = openText;
        }
        else {
          document.getElementById('operation-status-text').textContent = closedText;
          document.getElementById('open-close').src=closedSign;
        }
        break;

      case Tuesday:
        if (hour > 10 && hour < 20) {
          document.getElementById('open-close').src=openSign;
          document.getElementById('operation-status-text').textContent = openText;
        }
        else {
          document.getElementById('operation-status-text').textContent = closedText;
          document.getElementById('open-close').src=closedSign;
        }
        break;

      case Wednesday:
      case Thursday:
        if (hour > 10 && hour < 21) {
          document.getElementById('open-close').src=openSign;
          document.getElementById('operation-status-text').textContent = openText;
        } 
        else {
          document.getElementById('operation-status-text').textContent = closedText;
          document.getElementById('open-close').src=closedSign;
        }
        break;

      case Friday:
      case Saturday:
        if (hour > 10 && hour < 22) {
          document.getElementById('open-close').src=openSign;
          document.getElementById('operation-status-text').textContent = openText;
        }
        else {
          document.getElementById('operation-status-text').textContent = closedText;
          document.getElementById('open-close').src=closedSign;
        }
        break;

      default:
        document.getElementById('operation-status-text').textContent = closedText;
        document.getElementById('open-close').src=closedSign;
    }
  };

  function findTime() {
    // Converts Military time to AM PM
    let timeCheck = "";
    let hourTxt = 0;

    hour > 12 ? timeCheck = "PM" : timeCheck = "AM";
    hour % 12 == 0 ? hourTxt = 12 : hourTxt = hour % 12;

    document.getElementById('time').textContent = `${hourTxt}:${minute}:${second} ${timeCheck}`;
  };

  function findStaticHolidayDates() {
    let currentDate = `${month}/${date}`;

    switch (currentDate) {
      case NewYearsDay: 
        document.getElementById('open-close').src=newYearsSign;
        document.getElementById('operation-status-text').textContent = closedHoliday;
        break;

      case FourthOfJuly: 
        document.getElementById('open-close').src=fourthOfJulySign;
        document.getElementById('operation-status-text').textContent = closedHoliday;
        break;

      case ChristmasDay: 
        document.getElementById('open-close').src=christmasSign;
        document.getElementById('operation-status-text').textContent = closedHoliday;
        break;

      case VeteransDay: 
        document.getElementById('open-close').src=veteransDaySign;
        document.getElementById('operation-status-text').textContent = openHoliday;
        break;

      case Halloween:
        document.getElementById('open-close').src=halloweenSign;
        document.getElementById('operation-status-text').textContent = openHoliday;
        break;

      case ValentinesDay:
        document.getElementById('open-close').src=valentinesSign;
        document.getElementById('operation-status-text').textContent = openHoliday;
        break;

      case StPatricksDay:
        document.getElementById('open-close').src=stPatricksDaySign;
        document.getElementById('operation-status-text').textContent = openHoliday;
        break;

      case CincoDeMayo:
        document.getElementById('open-close').src=cincoDeMayoSign;
        document.getElementById('operation-status-text').textContent = openHoliday;
        break;

      case Juneteenth:
        document.getElementById('open-close').src=juneteenthSign;
        document.getElementById('operation-status-text').textContent = openHoliday;
        break;

      default: 
        findUnfixedHolidays();
        break;
    }

  };

  function findUnfixedHolidays() {
    //https://stackoverflow.com/questions/32342753/calculate-holidays-in-javascript

    function getDate(_year, _month, _week, _day) {
      const firstDay = 1;

      if (_week < 0) {
          _month++;
      }
      
      const _date = new Date(_year, _month, (_week * 7) + firstDay);

      if (_day < _date.getDay()) {
          _day += 7;
      }

      _date.setDate(_date.getDate() - _date.getDay() + _day);

      return _date;
    };

    function getDateString(_year, _month, _week, _day) {
      const _date = getDate(_year, _month, _week, _day);
      let _dateString = _date.toLocaleDateString();

      return _dateString;
    };

    function checkForYearMonthWeekAndDay () {
      
      switch (currentDateString) {
        case getDateString(year, November, FourthWeek, Thursday):
          document.getElementById('open-close').src=thanksgivingImg;
          document.getElementById('operation-status-text').textContent = closedHoliday;
          break;

        case getDateString(year, May, SecondWeek, Sunday): 
          document.getElementById('open-close').src=mothersDayImg;
          document.getElementById('operation-status-text').textContent = openHoliday;
          break;

        case getDateString(year, June, ThirdWeek, Sunday):
          document.getElementById('open-close').src=fathersDayImg;
          document.getElementById('operation-status-text').textContent = openHoliday;
          break;
        
        case getDateString(year, September, FirstWeek, Monday):
          document.getElementById('open-close').src=laborDayImg;document.document.getElementById('operation-status-text').textContent = closedHoliday;
          break;

        case getDateString(year, May, LastWeek, Monday): 
          document.getElementById('open-close').src=memorialDayImg;
          document.getElementById('operation-status-text').textContent = closedHoliday;
          break;

        case getDateString(year, February, ThirdWeek, Monday): 
          document.getElementById('open-close').src=presidentDay;
          document.getElementById('operation-status-text').textContent = openHoliday;
          break;
        
        case getDateString(year, January, ThirdWeek, Monday): 
          document.getElementById('open-close').src=martinLuterDay;
          document.getElementById('operation-status-text').textContent = openHoliday;
          break;

        case getDateString(year, February, SecondWeek, Sunday): 
          document.getElementById('open-close').src=superBowl;
          document.getElementById('operation-status-text').textContent = openHoliday;
          break;

        case getDateString(year, October, SecondWeek, Monday): 
          document.getElementById('open-close').src=columbusDay;
          document.getElementById('operation-status-text').textContent = openHoliday;
          break;

        default: 
          findEaster();
      }
    }

    let currentDateString = `${month + 1}/${date}/${year}`;
    
    checkForYearMonthWeekAndDay();
  };

  function findEaster() {
    function Easter(Y) {
      var C = Math.floor(Y/100);
      var N = Y - 19*Math.floor(Y/19);
      var K = Math.floor((C - 17)/25);
      var I = C - Math.floor(C/4) - Math.floor((C - K)/3) + 19*N + 15;
      I = I - 30*Math.floor((I/30));
      I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11));
      var J = Y + Math.floor(Y/4) + I + 2 - C + Math.floor(C/4);
      J = J - 7*Math.floor(J/7);
      var L = I - J;
      var M = 3 + Math.floor((L + 40)/44);
      var D = L + 28 - 31*Math.floor(M/4);
  
      return `${M-1}/${D}`;
    }
  
    function createEasterDay() {
      let easter = Easter(year) + '/' + year;
      let currentDateString = `${month}/${date}/${year}`;
  
      if (easter == currentDateString) {
        document.getElementById('open-close').src=easterDay;
        document.getElementById('operation-status-text').textContent = closedHoliday;
      } 
      else {
        document.getElementById('open-close').src=closedSign;
        findRegularOperationalHours();
      }
    }

    createEasterDay();
  }

  function createDate() {
    document.getElementById('date').textContent = d.toDateString();
  }

  createDate();
  findTime();
  findStaticHolidayDates();
};

setInterval(checkOpenStatus, 1000);
checkOpenStatus();