// const now=new Date()
// console.log(now) // its Utc time 
// //india is utc+5:30

// console.log(now.toDateString())
// console.log(now.toUTCString())
// console.log(now.toString())
// console.log(now.toJSON())

// //now.setFullYear(2023,11,20)
// console.log(now.toDateString()) //obj ki value of date bhi set kr skta hu even till milliseconds also .

// // How this object is getting exact time of utc or local time how?

// // its taking time from our system
// //but how its accessing this using web api 
// // system clock mamanges time formatting in our system 

// console.log(now.toLocaleTimeString())
// console.log(now.getDay(),now.getDate(),now.getFullYear())
// console.log(now.getMonth()+1)
// // follows zero based indexing 
// // +1 krke shii dega 

// days -- monday tues -- 1 based indexing 
// months 0 based indexed

// this creates inconsistency in understanding and not being depricated due to prior used by websites 

// // solved in Temporal Api and implemnted as followed

// // 1. Current date & time (UTC)
// const now = Temporal.Now.instant();
// console.log(now.toString());  
// // Example output: 2026-10-09T13:06:00Z

// // 2. Local date & time (system timezone)
// const localDateTime = Temporal.Now.plainDateTimeISO();
// console.log(localDateTime.toString());  
// // Example output: 2026-10-09T18:36:00

// // 3. Specific date creation
// const birthday = Temporal.PlainDate.from("2000-05-15");
// console.log(birthday.toString());  
// // Output: 2000-05-15

// // 4. Add/Subtract durations
// const tomorrow = localDateTime.add({ days: 1 });
// console.log(tomorrow.toString());  
// // Output: 2026-10-10T18:36:00

// // 5. Timezone aware datetime
// const meeting = Temporal.ZonedDateTime.from({
//   timeZone: "Asia/Kolkata",
//   year: 2026,
//   month: 10,
//   day: 9,
//   hour: 19,
//   minute: 0
// });
// console.log(meeting.toString());  
// // Output: 2026-10-09T19:00:00+05:30[Asia/Kolkata]

// // 6. Difference between two dates
// const start = Temporal.PlainDate.from("2026-01-01");
// const end = Temporal.PlainDate.from("2026-10-09");
// const diff = end.since(start);
// console.log(diff.toString());  
// Output: P9M8D (9 months, 8 days)


// temporal is as a testing feture now and can be accessed like this only while compiling .

// node --harmony-temporal "E:\Web Development\Javascript_by_\Date.js"ent\Javascript_by_> 
// 2026-10-09T13:09:52.432873984Z
// 2026-10-09T18:39:52.474759936
// 2000-05-15
// 2026-10-10T18:39:52.474759936
// 2026-10-09T19:00:00+05:30[Asia/Calcutta]
// P281D





// TImestamps in milliseconds that is common for every country region started jan 1970
// useful in competitive ontests jaha timely submissions krne hote hai waha pe equal parameter to judge krne ke liye 

const dt=Date.now()
console.log(new Date()); // timestamps
// yeh milliseconds dega mujhe and i can covert to exact utc time using this 
// browser handles this std and country time itself. sends utc time to browser and it wlll show acc to region specific





