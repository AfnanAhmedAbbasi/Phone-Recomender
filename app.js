alert("There are some that you have to give Answers for  a better  Phone recomendation ")
document.write("<h1> The phone recomender</h1>")
var budget=prompt("What is your budget. Low/Medium/High")
var system=prompt("Which Operating System do you want  Andriod/IOS")
var cameraQuality=prompt("Which Camera  Quality do you prefer. Basic/High/Moderate")
var battryLife=prompt("How much battery life do you want. Short/Average/Long")
var screenSize=prompt("Which Screen Size will be suitable for you. Small/Medium/Large")
if( budget=="Low" && system=="Andriod" && cameraQuality=="Basic" && battryLife=="Short" && screenSize=="Small"){
    document.write("<h3>Based on your prefrences , we recomend the following mobile phones</h3>")
    document.write("<h4>i) Samsung Galaxy AO1 Core</h4><br> The price of Phone is : $162<br> The Camera Quality of is   : 8MP back camera and 5MP front camera ")
    document.write("<h4>ii) Nokai C1</h4><br> The price of Phone is : $62<br> The Camera Quality of is   : 5MP back camera and 5MP front camera ")
    document.write("<h4>iii) Motorola Moto E6</h4><br> The price of Phone is : $152<br> The Camera Quality of is   : 13MP Rear camera  ")
}else if( budget=="Low" && system=="IOS" && cameraQuality=="Basic" && battryLife=="Short" && screenSize=="Small"){
    document.write("<h3>Based on your prefrences , we recomend the following mobile phones</h3>")
    document.write("<h4>i) iPhone SE(1st Generation)</h4><br> The price of Phone is : $429<br> The Camera Quality of is   : 12MP back camera and 1.2MP front camera ")
    document.write("<h4>ii) iPhone 6s</h4><br> The price of Phone is : $65<br> The Camera Quality of is   : 12MP back camera and 2.2MP front camera ")
    document.write("<h4>iii) iphone SE(2nd Generation)</h4><br> The price of Phone is : $429<br> The Camera Quality of is   : 12MP Rear camera and 1.8 MP fromt camera ")
}else if( budget=="Medium" && system=="Andriod" && cameraQuality=="Moderate" && battryLife=="Average" && screenSize=="Medium"){
    document.write("<h3>Based on your prefrences , we recomend the following mobile phones</h3>")
    document.write("<h4>i)Google pixel 4a</h4><br> The price of Phone is : $329<br> The Camera Quality of is   : 12.2MP back camera and 1.7MP front camera ")
    document.write("<h4>ii)One PLus Nord</h4><br> The price of Phone is : $299.99<br> The Camera Quality of is   : 48MP back camera and 5MP front camera ")
    document.write("<h4>iii)Samsung Galaxy A52</h4><br> The price of Phone is : $349<br> The Camera Quality of is   : 64MP Back camera and 8MP of front cmera  ")
}else if( budget=="Medium" && system=="IOS" && cameraQuality=="Moderate" && battryLife=="Average" && screenSize=="Medium"){
    document.write("<h3>Based on your prefrences , we recomend the following mobile phones</h3>")
    document.write("<h4>i)iphone XR</h4><br> The price of Phone is : $329<br> The Camera Quality of is   : 12.2MP back camera and 1.8MP front camera ")
    document.write("<h4>ii)iPhone 8 +</h4><br> The price of Phone is : $442.07<br> The Camera Quality of is   : 12MP back camera and 7MP front camera ")
    document.write("<h4>iii)iPhone 11</h4><br> The price of Phone is : $602<br> The Camera Quality of is   : 24MP Back camera and 12MP of front cmera  ")
}
//condition 03 phone
else if( budget=="High" && system=="Andriod" && cameraQuality=="High" && battryLife=="Long" && screenSize=="Large"){
    document.write("<h3>Based on your prefrences , we recomend the following mobile phones</h3>")
    document.write("<h4>i)Samsung Galaxy S21 ultra</h4><br> The price of Phone is : $479<br> The Camera Quality of is   : 108MP back camera and 40MP front camera ")
    document.write("<h4>ii)Google pixel 6 pro</h4><br> The price of Phone is : $602<br> The Camera Quality of is   : 50MP back camera and 11MP front camera ")
    document.write("<h4>iii)One plus Nord</h4><br> The price of Phone is : $759<br> The Camera Quality of is   : 48MP Back camera and 16MP of front cmera  ")
}
//conditio 03 IOS phone
else if( budget=="High" && system=="IOS" && cameraQuality=="High" && battryLife=="Long" && screenSize=="Large"){
    document.write("<h3>Based on your prefrences , we recomend the following mobile phones</h3>")
    document.write("<h4>i)iPhone 13 pro max</h4><br> The price of Phone is : $1325<br> The Camera Quality of is   : 36MP back camera and 24MP front camera ")
    document.write("<h4>ii)iPhone 14 pro max</h4><br> The price of Phone is : $1442<br> The Camera Quality of is   : 48MP back camera and 24MP front camera ")
    document.write("<h4>iii)iPhone 14 plus</h4><br> The price of Phone is : $889<br> The Camera Quality of is   : 24MP Back camera and 16MP of front cmera  ")
}
//1
else if( budget=="Medium" && system=="Andriod" && cameraQuality=="High" && battryLife=="Long" && screenSize=="Small"){
    document.write("<h3>Based on your prefrences , we recomend the following mobile phones</h3>")
    document.write("<h4>i)Google Pixel 5a</h4><br> The price of Phone is : $499<br> The Camera Quality of is   : 27MP back camera and 8MP front camera ")
    document.write("<h4>ii)Samsung Galaxy A52</h4><br> The price of Phone is : $399<br> The Camera Quality of is   : 64MP back camera and 32MP front camera ")
    document.write("<h4>iii)Xiaomi M11 Lite</h4><br> The price of Phone is : $299<br> The Camera Quality of is   : 64MP Back camera and 16MP of front cmera  ")
}
//1 in IOS
else if( budget=="Medium" && system=="IOS" && cameraQuality=="High" && battryLife=="Long" && screenSize=="Small"){
    document.write("<h3>Based on your prefrences , we recomend the following mobile phones</h3>")
    document.write("<h4>i)iPhone SE(2nd Generation)</h4><br> The price of Phone is : $399<br> The Camera Quality of is   : 12MP back camera and 7MP front camera ")
    document.write("<h4>ii)iPhone 12 mini</h4><br> The price of Phone is : $699<br> The Camera Quality of is   : 24MP back camera and 12MP front camera ")
    document.write("<h4>iii)iPhone 13 mini</h4><br> The price of Phone is : $699<br> The Camera Quality of is   : 24MP Back camera and 12MP of front camera")
}
//2
else if( budget=="Low" && system=="Andriod" && cameraQuality=="High" && battryLife=="Long" && screenSize=="Large"){
    document.write("<h3>Based on your prefrences , we recomend the following mobile phones</h3>")
    document.write("<h4>i)Xiaomi Redmi Note 10</h4><br> The price of Phone is : $209<br> The Camera Quality of is   : 108MP back camera and 16MP front camera ")
    document.write("<h4>ii)Realme Narzo 30 pro</h4><br> The price of Phone is : $200<br> The Camera Quality of is   : 48MP back camera and 16MP front camera ")
    document.write("<h4>iii)Samsung Galaxy M32</h4><br> The price of Phone is : $250<br> The Camera Quality of is   : 64MP Back camera and 20MP of front cmera  ")
}
//2 in IOS
else if( budget=="Low" && system=="IOS" && cameraQuality=="High" && battryLife=="Long" && screenSize=="Large"){
    document.write("<h3>Based on your prefrences , we recomend the following mobile phones</h3>")
    document.write("<h4>i)iPhone SE(2nd Generation)</h4><br> The price of Phone is : $399<br> The Camera Quality of is   : 12MP back camera and 7MP front camera ")
    document.write("<h4>ii)iPhone 11 (Refurbished or Second Hand)</h4><br> The price of Phone is : $400<br> The Camera Quality of is   : 12MP back camera and 12MP front camera ")
    document.write("<h4>iii)iPhone XR (Refurbished or Second Hand)</h4><br> The price of Phone is : $300<br> The Camera Quality of is   : 12MP Back camera and 7MP of front cmera  ")
}
//3
else if( budget=="High" && system=="Andriod" && cameraQuality=="High" && battryLife=="Long" && screenSize=="Small"){
    document.write("<h3>Based on your prefrences , we recomend the following mobile phones</h3>")
    document.write("<h4>i)Sony Xperia 5 III</h4><br> The price of Phone is : $900<br> The Camera Quality of is   : 36MP back camera and 8MP front camera ")
    document.write("<h4>ii)Google Pixel 6</h4><br> The price of Phone is : $600<br> The Camera Quality of is   : 50MP back camera and 12MP front camera ")
    document.write("<h4>iii)Samsung Galaxy Z Flip 3</h4><br> The price of Phone is : $999<br> The Camera Quality of is   : 24MP Back camera and 10MP of front cmera  ")
}
//3 in IOs
else if( budget=="High" && system=="IOS" && cameraQuality=="High" && battryLife=="Long" && screenSize=="Small"){
    document.write("<h3>Based on your prefrences , we recomend the following mobile phones</h3>")
    document.write("<h4>i)iPhone SE(2nd Generation)</h4><br> The price of Phone is : $399<br> The Camera Quality of is   : 12MP back camera and 7MP front camera ")
    document.write("<h4>ii)iPhone 12 mini</h4><br> The price of Phone is : $699<br> The Camera Quality of is   : 24MP back camera and 12MP front camera ")
    document.write("<h4>iii)iPhone 13 mini</h4><br> The price of Phone is : $699<br> The Camera Quality of is   : 24MP Back camera and 12MP of front camera")
}else{
    alert("Please enter valid Answers")
}