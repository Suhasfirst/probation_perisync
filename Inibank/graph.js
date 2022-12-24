let canvasElement = document.getElementById("cookieChart")

// console.log(canvasElement);

let config = {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    // labels: ["Smoker Status", "Demographic", "Bloodtype", "Sex"],
    datasets: [
      {

        label: ["Profit"],
        data: [900, 820, 380, 1000, 900],
        borderRadius: 2,
        backgroundColor: [
          "#54bbf2",
        ],
        barThickness: 10,
        barPercentage: 1,
        categoryPercentage: 0.3,
        font: {
          size: 20
        },

      },

      {
        label: ["Growth"],
        data: [440, 840, 600, 900, 560],
        borderRadius: 2,
        backgroundColor: [
          "#a7e0ff",
        ],
        barThickness: 10,
        font: {
          size: 20
        }
      },

      {
        label: ["Sales"],
        data: [640, 230, 900, 750, 350],
        borderRadius: 2,
        backgroundColor: [
          "#5195b9",
        ],
        barThickness: 10,
        font: {
          size: 20
        }
      },

    ],


  },
  options: {

    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        // text: 'Parameter Impact',
        position: "top",
        align: "start",
        color: "#f5f7f8",
        // color: blue,
        padding: {
          top: 0,
          // bottom: 0,
          left: 0
        },
        font: {
          family: 'Roboto', // Your font family
          size: 15,
        },

      },

      legend: {
        position: "bottom",
        align: "center",
        labels: {
          boxWidth: 12,
          useBorderRadius: true,
          borderRadius: 6,
        }
      }
    },
    scales: {
      x: {
        // stacked: true,
        grid: {
          display: false
        },
        ticks: {
          font: {
            family: 'Roboto', // Your font family
            size: 10,
          },
        },
      },

      y: {
        beginAtZero: true,
        min: 0,
        max: 1000,

        ticks: {

          maxTicksLimit: 7,
          stepSize: 200,
          // min: 0,
          // max: 1,
        },
        // gridLines: {
        //   // display: false ,
        //   color: "#FFFFFF"
        // },

      }
    }
  }
}

let cookieChart = new Chart(canvasElement, config)


// ! LINE GRAPH
let canvasElement2 = document.getElementById("cookieChart2")

// console.log(canvasElement);

let config2 = {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    // labels: ["Smoker Status", "Demographic", "Bloodtype", "Sex"],
    datasets: [
      {

        label: ["Profit"],
        data: [760, 500, 360, 550, 580, 360, 500, 600],
        borderRadius: 2,
        borderColor: "#5195b9",
        backgroundColor: [
          "#54bbf2",
        ],
        barThickness: 10,
        barPercentage: 1,
        categoryPercentage: 0.3,
        font: {
          size: 20
        },

      },

      {
        label: ["Growth"],
        data: [300, 400, 560, 400, 420, 650, 700, 800],
        borderColor: "#1daaf5",
        borderRadius: 2,
        backgroundColor: [
          "#a7e0ff",
        ],
        barThickness: 10,
        font: {
          size: 20
        }
      },



    ],


  },
  options: {

    elements: {
      point: {
        radius: 0
      }
    },
    tension: 0.4,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        // text: 'Parameter Impact',
        position: "top",
        align: "start",
        color: "#f5f7f8",
        // color: blue,
        padding: {
          top: 0,
          // bottom: 0,
          left: 0
        },
        font: {
          family: 'Poppins', // Your font family
          size: 15,
        },

      },

      legend: {
        display: false,
        position: "bottom",
        align: "center",
        labels: {
          boxWidth: 12,
          useBorderRadius: true,
          borderRadius: 6,
        }
      }
    },
    scales: {
      x: {
        // stacked: true,
        grid: {
          display: false
        },
        ticks: {
          font: {
            family: 'Roboto', // Your font family
            size: 10,
          },
        },
      },

      y: {
        beginAtZero: true,
        min: 0,
        max: 1000,

        ticks: {

          maxTicksLimit: 7,
          stepSize: 200,
          // min: 0,
          // max: 1,
        },
        // gridLines: {
        //   // display: false ,
        //   color: "#FFFFFF"
        // },

      }
    }
  }
}

let cookieChart2 = new Chart(canvasElement2, config2)

// ! DARK LIGHT BUTTON

let toggle = document.getElementById("sun")

let body = document.querySelector('body')

// let menuicons = document.getElementById("m1icon1")

let bool = false;

function litdrk() {
  console.log("a");
  // this.classList.toggle('fa-sun')
  // if(this.classList.toggle('fa-moon'))
  if (bool == false) {
    body.style.background = '#212425'
    body.style.color = '#ffffff'

    document.getElementById("menubar").style.backgroundColor = '#2a2e31'
    document.getElementById("logotext").style.color = '#ffffff'
    document.getElementById("menubar-logo").style.borderBottom = '2px solid #343537'

    // document.getElementsByClassName("infunds").style.backgroundColor='#242526'
    // document.getElementById("activity-submenu")[1].style.backgroundColor='#242526'
    document.getElementById("bayu-ananda-name").style.color = '#ffffff'

    document.getElementById("bayu-email").style.color = '#b5b5b5'
    document.getElementById("mainbody-header-searchbox").style.backgroundColor = '#2a2e31'
    document.getElementById("mainbody-header-searchbox").style.border = '2px solid #343537'

    document.getElementById("totalbalance").style.backgroundColor = '#2a2e31'
    document.getElementById("lrbtn-left").style.backgroundColor = '#2a2e31'
    document.getElementById("lrbtn-right").style.backgroundColor = '#2a2e31'
    document.getElementById("lrbtn-left").style.border = '#2a2e31'
    document.getElementById("lrbtn-right").style.border = '#2a2e31'

    document.getElementById("whitedollar").style.color = '#ffffff'
    document.getElementById("usdollarwhite").style.color = '#ffffff'

    document.getElementById("tbwhite").style.color = '#bdbdbd'
    document.getElementById("currywhite").style.color = '#bdbdbd'

    document.getElementById("totalbalance").style.border = '2px solid #343537'

    document.getElementById("financial-top-right").style.backgroundColor = '#2a2e31'
    document.getElementById("financial-top-right").style.color = '#bdbdbd'
    document.getElementById("financial-top-right").style.border = '2px solid #343537'

    document.getElementById("financial-bottom-box1").style.backgroundColor = '#2a2e31'
    document.getElementById("financial-bottom-box1").style.color = '#bdbdbd'
    document.getElementById("financial-bottom-box1").style.border = '2px solid #343537'

    document.getElementById("ti-amt").style.color = 'white'
    document.getElementById("tic-tic").style.color = '#bdbdbd'
    document.getElementById("fromlastweek").style.color = '#bdbdbd'

    // document.getElementById("financial-bottom-box2").style.backgroundColor='#2a2e31'
    // document.getElementById("financial-bottom-box2").style.color='#bdbdbd'
    // document.getElementById("financial-bottom-box2").style.border='2px solid #343537'

    // document.getElementById("ti-amt2").style.color='white'
    // document.getElementById("tic-tic2").style.color='#bdbdbd'
    // document.getElementById("fromlastweek2").style.color='#bdbdbd'

    // document.getElementById("financial-bottom-box3").style.backgroundColor='#2a2e31'
    // document.getElementById("financial-bottom-box3").style.color='#bdbdbd'
    // document.getElementById("financial-bottom-box3").style.border='2px solid #343537'

    // document.getElementById("ti-amt3").style.color='white'
    // document.getElementById("tic-tic3").style.color='#bdbdbd'
    // document.getElementById("fromlastweek3").style.color='#bdbdbd'

    document.getElementById("monthly-outer1").style.backgroundColor = '#2a2e31'
    document.getElementById("monthly-outer1").style.color = '#bdbdbd'
    document.getElementById("monthly-outer1").style.border = '2px solid #343537'

    document.getElementById("monthly-outer2").style.backgroundColor = '#2a2e31'
    document.getElementById("monthly-outer2").style.color = '#bdbdbd'
    document.getElementById("monthly-outer2").style.border = '2px solid #343537'

    document.getElementById("monthly-outer3").style.backgroundColor = '#2a2e31'
    document.getElementById("monthly-outer3").style.color = '#bdbdbd'
    document.getElementById("monthly-outer3").style.border = '2px solid #343537'

    document.getElementById("sb-ern-top2-right-i2").style.backgroundColor = '#2a2e31'
    document.getElementById("sb-ern-top2-right-i2").style.color = '#bdbdbd'
    document.getElementById("sb-ern-top2-right-i2").style.border = '2px solid #343537'

    document.getElementById("sb-ern-top2-right-i1").style.backgroundColor = '#2a2e31'
    document.getElementById("sb-ern-top2-right-i1").style.color = '#bdbdbd'
    document.getElementById("sb-ern-top2-right-i1").style.border = '2px solid #343537'

    document.getElementById("sb-ern-top1-right").style.color = '#bdbdbd'
    document.getElementById("sb-trans-top-right").style.color = '#bdbdbd'

    document.getElementById("trans-btm-1-icon-outer1").style.backgroundColor = '#2a2e31'
    document.getElementById("trans-btm-1-icon-outer1").style.color = '#bdbdbd'
    document.getElementById("trans-btm-1-icon-outer1").style.border = '2px solid #343537'

    // document.getElementById("trans-btm-1-icon-outer2").style.backgroundColor='#2a2e31'
    // document.getElementById("trans-btm-1-icon-outer2").style.color='#bdbdbd'
    // document.getElementById("trans-btm-1-icon-outer2").style.border='2px solid #343537'

    // document.getElementById("trans-btm-1-icon-outer3").style.backgroundColor='#2a2e31'
    // document.getElementById("trans-btm-1-icon-outer3").style.color='#bdbdbd'
    // document.getElementById("trans-btm-1-icon-outer3").style.border='2px solid #343537'

    document.getElementById("steamwalletsubhead1").style.color = '#bdbdbd'
    // document.getElementById("steamwalletsubhead2").style.color='#bdbdbd'
    // document.getElementById("steamwalletsubhead3").style.color='#bdbdbd'

    document.getElementById("sb-quick-three-dots").style.backgroundColor = '#2a2e31'
    document.getElementById("sb-quick-three-dots").style.color = '#bdbdbd'
    document.getElementById("sb-quick-three-dots").style.border = '2px solid #343537'

    document.getElementById("cardnum-title").style.color = '#bdbdbd'
    document.getElementById("amount-title").style.color = '#bdbdbd'

    document.getElementById("cardnum-num").style.backgroundColor = '#2a2e31'
    document.getElementById("cardnum-num").style.color = '#bdbdbd'
    document.getElementById("cardnum-num").style.border = '2px solid #343537'

    document.getElementById("amtbox-inner").style.backgroundColor = '#2a2e31'
    document.getElementById("amtbox-inner").style.color = '#bdbdbd'
    document.getElementById("amtbox-inner").style.border = '2px solid #343537'

    document.getElementById("downloadicon").style.backgroundColor = '#2a2e31'
    document.getElementById("downloadicon").style.color = '#bdbdbd'
    document.getElementById("downloadicon").style.border = '2px solid #343537'

    document.getElementById("menubar-footer").style.borderTop = '2px solid #343537'
    document.getElementById("menubar").style.borderRight = '2px solid #343537'

    document.getElementById("m1icon22").style.color = '#bdbdbd'
    document.getElementById("m1icon33").style.color = '#bdbdbd'
    document.getElementById("m1icon44").style.color = '#bdbdbd'
    document.getElementById("m1icon55").style.color = '#bdbdbd'
    document.getElementById("m1icon66").style.color = '#bdbdbd'

    document.getElementById("mt2").style.color = '#bdbdbd'
    document.getElementById("mt3").style.color = '#bdbdbd'
    document.getElementById("mt4").style.color = '#bdbdbd'
    document.getElementById("mt5").style.color = '#bdbdbd'
    document.getElementById("mt6").style.color = '#bdbdbd'

    document.getElementById("as-m2").style.backgroundColor = '#242526'

    document.getElementById("mb-toggleinner").style.backgroundColor = '#242526'

    document.getElementById("mb-toggleinner-dark").style.backgroundColor = ''
    document.getElementById("mb-toggleinner-light").style.backgroundColor = '#19a8f5'

    document.getElementById("sun").style.color = 'white'

    document.getElementById("searchdata").style.backgroundColor = '#2a2e31'





    // console.log(document.getElementsByName("div"));
    // document.getElementsByClassName("greycol").color='red'
    // // document.querySelector(".greycol").style.color='#bdbdbd'

    // console.log(document.getElementsByClassName("greycol"));

    bool = true;
  }
  else {
    body.style.color = ''

    document.getElementById("menubar").style.backgroundColor = ''
    document.getElementById("logotext").style.color = ''
    document.getElementById("menubar-logo").style.borderBottom = ''
    document.getElementById("bayu-ananda-name").style.color = ''
    // document.getElementById("activity-submenu")[1].style.backgroundColor=''

    document.getElementById("mainbody-header-searchbox").style.backgroundColor = ''
    document.getElementById("mainbody-header-searchbox").style.border = ''

    document.getElementById("totalbalance").style.backgroundColor = ''
    document.getElementById("lrbtn-left").style.backgroundColor = ''
    document.getElementById("lrbtn-right").style.backgroundColor = ''
    document.getElementById("lrbtn-left").style.border = ''
    document.getElementById("lrbtn-right").style.border = ''

    document.getElementById("whitedollar").style.color = ''
    document.getElementById("usdollarwhite").style.color = ''

    document.getElementById("tbwhite").style.color = ''
    document.getElementById("currywhite").style.color = ''

    document.getElementById("totalbalance").style.border = ''

    document.getElementById("financial-top-right").style.backgroundColor = ''
    document.getElementById("financial-top-right").style.color = ''
    document.getElementById("bayu-email").style.color = ''


    document.getElementById("financial-top-right").style.border = ''

    document.getElementById("financial-bottom-box1").style.backgroundColor = ''
    document.getElementById("financial-bottom-box1").style.color = ''
    document.getElementById("financial-bottom-box1").style.border = ''

    document.getElementById("ti-amt").style.color = ''
    document.getElementById("tic-tic").style.color = ''
    document.getElementById("fromlastweek").style.color = ''

    // document.getElementById("financial-bottom-box2").style.backgroundColor=''
    // document.getElementById("financial-bottom-box2").style.color=''
    // document.getElementById("financial-bottom-box2").style.border=''

    // document.getElementById("ti-amt2").style.color=''
    // document.getElementById("tic-tic2").style.color=''
    // document.getElementById("fromlastweek2").style.color=''

    // document.getElementById("financial-bottom-box3").style.backgroundColor=''
    // document.getElementById("financial-bottom-box3").style.color=''
    // document.getElementById("financial-bottom-box3").style.border=''

    // document.getElementById("ti-amt3").style.color=''
    // document.getElementById("tic-tic3").style.color=''
    // document.getElementById("fromlastweek3").style.color=''

    document.getElementById("monthly-outer1").style.backgroundColor = ''
    document.getElementById("monthly-outer1").style.color = ''
    document.getElementById("monthly-outer1").style.border = ''

    document.getElementById("monthly-outer2").style.backgroundColor = ''
    document.getElementById("monthly-outer2").style.color = ''
    document.getElementById("monthly-outer2").style.border = ''

    document.getElementById("monthly-outer3").style.backgroundColor = ''
    document.getElementById("monthly-outer3").style.color = ''
    document.getElementById("monthly-outer3").style.border = ''

    document.getElementById("sb-ern-top2-right-i2").style.backgroundColor = ''
    document.getElementById("sb-ern-top2-right-i2").style.color = ''
    document.getElementById("sb-ern-top2-right-i2").style.border = ''

    document.getElementById("sb-ern-top2-right-i1").style.backgroundColor = ''
    document.getElementById("sb-ern-top2-right-i1").style.color = ''
    document.getElementById("sb-ern-top2-right-i1").style.border = ''

    document.getElementById("sb-ern-top1-right").style.color = ''
    document.getElementById("sb-trans-top-right").style.color = ''

    document.getElementById("trans-btm-1-icon-outer1").style.backgroundColor = ''
    document.getElementById("trans-btm-1-icon-outer1").style.color = ''
    document.getElementById("trans-btm-1-icon-outer1").style.border = ''

    // document.getElementById("trans-btm-1-icon-outer2").style.backgroundColor=''
    // document.getElementById("trans-btm-1-icon-outer2").style.color=''
    // document.getElementById("trans-btm-1-icon-outer2").style.border=''

    // document.getElementById("trans-btm-1-icon-outer3").style.backgroundColor=''
    // document.getElementById("trans-btm-1-icon-outer3").style.color=''
    // document.getElementById("trans-btm-1-icon-outer3").style.border=''

    document.getElementById("steamwalletsubhead1").style.color = ''
    // document.getElementById("steamwalletsubhead2").style.color=''
    // document.getElementById("steamwalletsubhead3").style.color=''

    document.getElementById("sb-quick-three-dots").style.backgroundColor = ''
    document.getElementById("sb-quick-three-dots").style.color = ''
    document.getElementById("sb-quick-three-dots").style.border = ''

    document.getElementById("cardnum-title").style.color = ''
    document.getElementById("amount-title").style.color = ''

    document.getElementById("cardnum-num").style.backgroundColor = ''
    document.getElementById("cardnum-num").style.color = ''
    document.getElementById("cardnum-num").style.border = ''

    document.getElementById("amtbox-inner").style.backgroundColor = ''
    document.getElementById("amtbox-inner").style.color = ''
    document.getElementById("amtbox-inner").style.border = ''

    document.getElementById("downloadicon").style.backgroundColor = ''
    document.getElementById("downloadicon").style.color = ''
    document.getElementById("downloadicon").style.border = ''

    document.getElementById("menubar-footer").style.borderTop = ''
    document.getElementById("menubar").style.borderRight = ''

    document.getElementById("m1icon22").style.color = ''
    document.getElementById("m1icon33").style.color = ''
    document.getElementById("m1icon44").style.color = ''
    document.getElementById("m1icon55").style.color = ''
    document.getElementById("m1icon66").style.color = ''

    document.getElementById("mt2").style.color = ''
    document.getElementById("mt3").style.color = ''
    document.getElementById("mt4").style.color = ''
    document.getElementById("mt5").style.color = ''
    document.getElementById("mt6").style.color = ''

    document.getElementById("as-m2").style.backgroundColor = ''

    document.getElementById("mb-toggleinner").style.backgroundColor = ''

    document.getElementById("mb-toggleinner-dark").style.backgroundColor = '#19a8f5'
    document.getElementById("mb-toggleinner-light").style.backgroundColor = ''

    document.getElementById("searchdata").style.backgroundColor = ''



    body.style.background = ''
    body.style.color = ''
    bool = false;
  }
}


// ! HIDE SHOW DATA

let bool2 = false;

function hideshow() {
  console.log("anc");
  if (bool2 == false) {
    document.getElementById("menubar").style.flex = "0.25"
    document.getElementById("menubar").style.width = "10%"


    document.getElementById("menubar-menus-in").style.display = "none"
    document.getElementById("logotext").style.display = "none"
    document.getElementById("bayu-name").style.display = "none"
    document.getElementById("menubar-menus-in2").style.display = "flex"
    document.getElementById("menubar-menus-in2").style.marginLeft = "25%"
    document.getElementById("menubartoggle").style.width = "65%"
    document.getElementById("menubar-logo-in").style.width = "40%"







    document.getElementById("opnclsbtn2").style.display = "flex"


    bool2 = true;
  }
  else {
    document.getElementById("menubar").style.flex = "1"

    document.getElementById("menubar").style.display = ""
    document.getElementById("opnclsbtn2").style.display = "none"

    document.getElementById("menubar-menus-in").style.display = "none"

    document.getElementById("menubar-menus-in").style.display = ""
    document.getElementById("logotext").style.display = ""
    document.getElementById("bayu-name").style.display = ""
    document.getElementById("menubar-menus-in2").style.display = ""
    document.getElementById("menubartoggle").style.width = ""
    document.getElementById("menubar-menus-in2").style.marginLeft = ""



    bool2 = false
  }
}

// ! HIDE SHOW BODY

let bool3 = false;


function hsbody() {
  if (bool3 == false) {
    document.getElementById("mainbody").style.display = "none"
    document.getElementById("menubar").style.flex = "none"
    document.getElementById("menubar").style.width = "20%"
    document.getElementById("thebody").style.justifyContent = "center"


    bool3 = true;
  }
  else {
    document.getElementById("mainbody").style.display = ""



    bool3 = false
  }
}

// ! HIDE AND SHOW ACTIVITY SUBMENU

let bool4 = false;

function hssubmenu() {
  if (bool4 == false) {
    document.getElementById("activity-submenu").style.display = "none"
    document.getElementById("up").style.rotate = "-90deg"
    // document.getElementById("down").style.display="flex"



    bool4 = true;
  }
  else {
    document.getElementById("activity-submenu").style.display = ""
    document.getElementById("up").style.rotate = "90deg"



    bool4 = false
  }
}

// ! TRANSACTION DATA

let myTransaction = document.getElementById("sidebar-transaction-bottom")

let transactionData = [
  {
    image: "./steam.png",
    title: "Steam Wallet",
    subtitle: "Apr 05, 2022 at 21:44",
    amount: "-$29,49",
  },
  {
    image: "./shopee-logo-31405.png",
    title: "Shoopepay",
    subtitle: "Apr 05, 2022 at 21:44",
    amount: "+$129,49",
  },
  {
    image: "./netflix_PNG15.png",
    title: "Netflix",
    subtitle: "Apr 05, 2022 at 21:44",
    amount: "-$19,49",
  },
  // {
  //     image: "./steam.png",
  //     title: "Amazon",
  //     subtitle: "Apr 05, 2022 at 21:44",
  //     amount: "+$129,49",
  // },

]

for (let { image, title, subtitle, amount } of transactionData) {
  // console.log(data);
  myTransaction.innerHTML +=
    `
  <div id="sb-trans-btm-1" class="br fdrow">

  <div id="sb-trans-btm-1-icon" class="br ai ">

      <div id="trans-btm-1-icon-outer1" class="br ai jc">
          <img src="${image}" height="75%" width="75%" style="border-radius: 50%;">
      </div>
  </div>

  <div id="sb-trans-btm-1-text" class="br fdcol jc">

      <div id="steamwallet" class="br">

          <p>${title}</p>
      </div>

      <div id="steamwalletsubhead1" class="br ai">
          <p>${subtitle}</p>
      </div>
  </div>

  <div id="sb-trans-btm-1-perc" class="br ai">

      <p>${amount}</p>
  </div>
</div>
  `
}



// ! FINANCIAL RECORD DATA CARDS

let myFcards = document.getElementById("mainbody-financial-bottom")

let cards = [
  {
    title: "Total Income",
    amount: 874.99,
    perc: 7.8
  },
  {
    title: "Total Expense",
    amount: 123.09,
    perc: 9.8
  },
  {
    title: "Total Saving",
    amount: 420.39,
    perc: 7.8
  },

]

let c = cards.map(({ title, amount, perc }) => {
  // console.log(data);
  return myFcards.innerHTML +=
    `
  <div id="financial-bottom-box1" class="br ai jc">

  <div id="financial-bottom-box1-in" class="br fdcol">

      <div id="fb-btm-totalincome" class="br">
          <p id="tic-tic">${title}</p>
      </div>

      <div id="fb-btm-amount" class="br">
          <p id="ti-amt">$${amount}</p>
      </div>

      <div id="fb-btm-perc" class="br fdrow">
          <p>
          <div style="rotate: 45deg; color: #2fcb35"><i class="fa fa-arrow-up"
                  aria-hidden="true"></i></div><span
              style="color: #2fcb35; font-weight: 900;"> ${perc}% </span><span id="fromlastweek">&nbsp; from last week</span></p>
      </div>
  </div>
</div>
  `
})


// ! ATM card pakka ira cardu

let counter = 0


let myArray = ["suhas", "r"]

let bayuArray = [
  {
    balance: 99000,
    currency: "Indian Rupees"
  },
  {
    balance: 10000,
    currency: "Japanese Yen"
  },
  {
    balance: 56000,
    currency: "US Dollars"
  }
]

function nextcard() {
  if (counter < bayuArray.length) {
    console.log(counter);
    console.log(myArray[counter]);
    counter++;
    // console.log(counter);

    return document.getElementById("totalbalance-in").innerHTML =
      `
  <div id="totalbalance-in-top" class="br">

  <div id="totalbalance-in-top-head" class="br">
      <p id="tbwhite">Total Balance</p>
  </div>

  <div id="totalbalance-in-top-amount" class="br">
      <p id="whitedollar">${bayuArray[counter - 1].balance}</p>
  </div>
</div>

<div id="totalbalance-in-mid" class="br">
  <div id="totalbalance-in-top-head" class="br">
      <p id="currywhite">Currency</p>
  </div>

  <div id="totalbalance-in-top-amount" class="br">
      <p id="usdollarwhite">${bayuArray[counter - 1].currency}</p>
  </div>
</div>

<div id="totalbalance-in-bottom" class="br ai jc">
                                    <p>Withdraw</p>
                                </div>
  `
  }

}

function prevcard() {
  if (counter >= 0) {
    console.log(counter);
    console.log(myArray[counter]);
    counter--;
    // console.log(counter);

    return document.getElementById("totalbalance-in").innerHTML =
      `
  <div id="totalbalance-in-top" class="br">

  <div id="totalbalance-in-top-head" class="br">
      <p id="tbwhite">Total Balance</p>
  </div>

  <div id="totalbalance-in-top-amount" class="br">
      <p id="whitedollar">${bayuArray[counter].balance}</p>
  </div>
</div>

<div id="totalbalance-in-mid" class="br">
  <div id="totalbalance-in-top-head" class="br">
      <p id="currywhite">Currency</p>
  </div>

  <div id="totalbalance-in-top-amount" class="br">
      <p id="usdollarwhite">${bayuArray[counter].currency}</p>
  </div>
</div>

<div id="totalbalance-in-bottom" class="br ai jc">
                                    <p>Withdraw</p>
                                </div>
  `
  }
}

nextcard()

// let fn = nextcard()

// console.log(nextcard(9));
// console.log(nextcard());
// console.log(counter);
// console.log(fn);

// ! API INTEGRATION TO SEARCH INPUT

let ipkeyword=document.getElementById("iamsearchbox").value

async function dispmovies() 
{
  // console.log("movies");
  // let movies = await fetch("http://www.omdbapi.com/?s=avengers&apikey=ebcbd0aa")
  // movies = await movies.json()
  // movies = movies.Search
  // console.log(movies);

  // for(let {Title} of movies)
  // {
  //   // console.log(Title);
  // }
  // console.log(document.getElementById("iamsearchbox").value);
  let ipkeyword=document.getElementById("iamsearchbox").value
  console.log(ipkeyword);

  if(ipkeyword!="")
  {
    document.getElementById("searchdata").style.display="flex"
  }
  else
  {
    document.getElementById("searchdata").style.display="none"
  }

  let movies = await fetch(`http://www.omdbapi.com/?s=${ipkeyword}&apikey=ebcbd0aa`)
  movies = await movies.json()
  movies = movies.Search
  console.log(movies);

  movies.map(({Title, Year, Poster})=>{
    console.log(Title);
    console.log(Year);
    console.log(Poster);
    return document.getElementById("searchdata").innerHTML+=
    `
    <div class="resultone br fdrow">

                            <div class="r1icondiv br ai jc">

                                <img src="${Poster}" alt="" class="br">
                            </div>

                            <div class="r1textdiv br ai jc">

                                <div class="r1text br">
                                    <p>${Title}</p>
                                </div>
                            </div>

                            <div class="r1yeardiv br ai jc">

                                <div class="r1text br ai jc">
                                    <p>${Year}</p>
                                </div>
                            </div>
                        </div>
    `
  })

  console.log(ipkeyword);
  
}

let bool5=false;

function gayabres()
{
  if(bool5==false)
  {
  document.getElementById("searchdata").style.display="none"
  console.log("gayab");
  document.getElementById("iamsearchbox").value=""
  bool5=true;
  }
  else
  {
    document.getElementById("searchdata").style.display=""
    bool5=false;
    document.getElementById("iamsearchbox").value=""

  }
}