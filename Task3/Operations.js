

// First 
document.getElementById("withdrawButton").addEventListener("click" , function()
{
    const balance = parseFloat(document.getElementById("balance").value);
    const amount = parseFloat(document.getElementById("amount").value);
    const testingPin = document.getElementById("testingPin").textContent;
    const enteredPin = document.getElementById("enteredPin").value;

    const result1 = atmWithdrawal(balance,amount,testingPin,enteredPin);
    const resultDiv = document.getElementById("result1");
    resultDiv.innerHTML = `<p>${result1}</p>`;
    resultDiv.style.display = "block";
    // alert(result1);
});

function atmWithdrawal(balance,amount,testingPin,enteredPin)
{
    if(enteredPin !== testingPin)
    {
        return "Invalid Pin";
    }

    if(amount % 100 !== 0 )
    {
       return "Enter amount in multiples of 100";
    }

    if(amount>balance)
    {
        return "Insufficient Balance";
    }
    return "Withdrawal Succesfull"; 
}


// Second

document.getElementById("buyButton").addEventListener("click", function(event){
    event.preventDefault();
    const totalAmount = parseFloat(document.getElementById("totalAmount").value);

  

    if (isNaN(totalAmount) || totalAmount <= 0) {
        alert("Please enter a valid order amount.");
        return;
    }

    const result =calculateFinalAmount(totalAmount);
    const resultDiv = document.getElementById("result2");
    resultDiv.innerHTML = `
        <p><strong>Order Amount:</strong> $${result.totalAmount.toFixed(2)}</p>
        <p><strong>Discount Applied:</strong> $${result.discountAmount.toFixed(2)}</p>
        <p><strong>Shipping Charges:</strong> $${result.shippingCharges.toFixed(2)}</p>
        <p><strong>Final Payable Amount:</strong> $${result.finalAmount.toFixed(2)}</p>`;
    resultDiv.style.display = "block";
});


function calculateFinalAmount(totalAmount)
{
    let discountPercentage=0;
  if(totalAmount>1000)
  {
    discountPercentage=20;
  }
  else if(totalAmount >= 500 && totalAmount <= 1000)
  {
     discountPercentage=10;
  }
  else
  {
    discountPercentage=0;
  }

  const discountAmount = (totalAmount * discountPercentage)/100;
  const afterDiscount = totalAmount - discountAmount;

  let shippingCharges = 0;
  if(afterDiscount < 50)
  {
    shippingCharges=10;
  }
  else
  {
    shippingCharges=0;
  }

  const finalAmount = afterDiscount + shippingCharges;

  return{totalAmount,discountAmount,afterDiscount,shippingCharges,finalAmount};

}


//Student Grading System with Extra Credit

document.getElementById("resultButton").addEventListener("click",function()
{
     const marks =  parseFloat(document.getElementById("marks").value);
     const attendance =  parseFloat(document.getElementById("attendance").value);
     const result3 = calculateGrade(marks, attendance);
     const resultDiv = document.getElementById("result3");
     resultDiv.innerHTML = `<p>Grade : ${result3}</p>`;
     resultDiv.style.display = "block";
});

function calculateGrade(marks, attendance)
{
   if(attendance > 90)
   {
     marks+=5;
   }


   if(marks >= 90)
   {
    return "A";
   }
   else if(marks >= 80 )
   {
    return "B";
   }
   else if(marks >= 70)
   {
    return "C";
   }
   else if(marks >= 60)
   {
    return "D";
   }
   else
   {
    return "F";
   }
}


// Smart Traffic Light System

document.getElementById("density").addEventListener("click",function()
{
     const traffic = document.getElementById("traffic").value;
     const result4 = trafficLightControl(traffic);
     const resultDiv = document.getElementById("result4");
     resultDiv.innerHTML = `<p>Green for ${result4} seconds</p>`;
     resultDiv.style.display = "block";
});

function trafficLightControl(traffic)
{
    let duration;
     switch(traffic)
     {
        case "Heavy Traffic":
            duration=60;
            break;

        case "Moderate Traffic":
            duration=40;
            break;   

        case "Light Traffic":
            duration=20;
            break;   
     }

     return duration;
}


// Movie Ticket Pricing with Time and Age Discount
document.getElementById("calculate").addEventListener("click",function()
{
     const age =  parseFloat(document.getElementById("age").value);
     const time =  parseFloat(document.getElementById("time").value);
     const result5 = calculateTicketPrice(age,time);
     const resultDiv = document.getElementById("result5");
     resultDiv.innerHTML = `<p> Final ticket price :$ ${result5}</p>`;
     resultDiv.style.display = "block";
});

function calculateTicketPrice(age,time)
{
    let price = 12;

    const isMatinee = time < 17; // 5pm 

    if (isMatinee)
    {
        price *= 0.8;
    }
    if (age > 60) 
    {
        price *= 0.7;
    } 
    else if (age < 12) 
    {
        price *= 0.6;
    }

    return price.toFixed(2);
}


// Job Application Filter
document.getElementById("check").addEventListener("click",function()
{
     const jobAge = parseFloat(document.getElementById("jobAge").value);
     const experience =parseFloat(document.getElementById("experience").value);
     const qualification = document.getElementById("qualification").value;
     const result6 = isEligibleForJob(jobAge, experience, qualification);
     const resultDiv = document.getElementById("result6");
     resultDiv.innerHTML = `<p>You are ${result6} for job</p>`;
     resultDiv.style.display = "block";
});

function isEligibleForJob(age, experience, qualification)
{
    if((age >= 21 && age <= 55) && experience >=2 && (qualification=="Bachelor's Degree" ||qualification=="Masters's Degree"))
    {
        return "Eligible";
    }
    else
    {
        return "Not Eligible"
    }
}


// E-commerce Coupon Redemption
document.getElementById("finalPrice").addEventListener("click" , function()
{
    const orderAmount = parseFloat(document.getElementById("orderAmount").value);
    const coupon = document.getElementById("coupon").value;
    const result7 = applyCoupon(orderAmount,coupon);
    const resultDiv = document.getElementById("result7");
    resultDiv.innerHTML = `<p>Final Price :$${result7}</p>`;
    resultDiv.style.display = "block";
});

function applyCoupon(orderAmount,coupon)
{
    let finalPrice = orderAmount;
    if(coupon ==="DISCOUNT10" && orderAmount > 500)
    {
        finalPrice = orderAmount * 0.9;
    }
    else if(coupon ==="FREESHIP" && orderAmount > 200)
    {
        finalPrice = orderAmount;
    }
    else{
        finalPrice = orderAmount;
    }
    return finalPrice
}


// Fitness Membership Plan
document.getElementById("select").addEventListener("click" , function()
{
    const plan = document.getElementById("plan").value;
    const wantsTrainer = document.getElementById("wantsTrainer").value=== "true";
    const wantsDietPlan = document.getElementById("wantsDietPlan").value=== "true";
    const result8 = choosePlan(plan, wantsTrainer, wantsDietPlan) ;
    const resultDiv = document.getElementById("result8");
    resultDiv.innerHTML = `<p>Suggested plan : ${result8}</p>`;
    resultDiv.style.display = "block";
});

function choosePlan(planType, wantsTrainer, wantsDietPlan)
{
    if (wantsTrainer && wantsDietPlan) {
        return "VIP";
    } else if (wantsTrainer) {
        return "Premium";
    } else if (wantsDietPlan) {
        return "VIP"; 
    } else
    {
        return "Basic";
    }
}


// Electricity Bill Calculation with Peak Hours
document.getElementById("bill").addEventListener("click" , function()
{
    const units = parseFloat(document.getElementById("units").value);
    const timeOfDay = document.getElementById("timeOfDay").value;
    const result9 = calculateElectricityBill(units,timeOfDay) ;
    const resultDiv = document.getElementById("result9");
    resultDiv.innerHTML = `<p>Total Bill : $${result9}</p>`;
    resultDiv.style.display = "block";
});

function calculateElectricityBill(units,timeOfDay)
{
    let rate;

    if (timeOfDay === "NormalHours")
    {
        if (units < 100)
        {
            rate = 5;
        } else if (units < 300)
        {
            rate = 4;
        } else 
        {
            rate = 3;
        }
    } else if (timeOfDay === "PeakHours") 
        {
        if (units < 100) 
        {
            rate = 5 * 1.1;
        } else if (units < 300)
        {
            rate = 4 * 1.1;
        } else
        {
            rate = 3 * 1.1;
        }
    } else 
    {
        return "Invalid time of day";
    }

    const totalBill = units * rate;
    return totalBill.toFixed(2);
}

//Flight Ticket Booking System
document.getElementById("flightPrice").addEventListener("click", function () {
    const classType = document.getElementById("classType").value;
    const luggageWeight = parseFloat(document.getElementById("luggageWeight").value);
    const discountType = document.querySelector('input[name="discount"]:checked').value;
    const result10 = calculateFlightFare(classType, luggageWeight, discountType);

    const resultDiv = document.getElementById("result10");
    resultDiv.innerHTML = `
        <p><strong>Class:</strong> ${classType}</p>
        <p><strong>Luggage Weight:</strong> ${luggageWeight} kg</p>
        <p><strong>Discount Applied:</strong> ${discountType}</p>
        <p><strong>Final Fare:</strong> $${result10}</p>`;
    resultDiv.style.display = "block";
});

function calculateFlightFare(classType, luggageWeight, discountType) {
    const baseFare = 300;

    let typeCharge = 0;
    if (classType === "businessClass")
    {
        typeCharge = 200;
    } else if (classType === "firstClass") 
    {
        typeCharge = 500;
    }

    let extraLuggageCharge = 0;
    if (luggageWeight > 20) 
    {
        const excessWeight = luggageWeight - 20; 
        const extraUnits = Math.ceil(excessWeight / 10);
        extraLuggageCharge = extraUnits * 50;
    }

    let totalFare = baseFare + typeCharge + extraLuggageCharge;
    console.log(totalFare);

    if (discountType === "student") 
    {
        totalFare *= 0.85; 
    } else if (discountType === "senior")
    {
        totalFare *= 0.90; 
    }
   console.log(totalFare);
    return totalFare.toFixed(2);
}