let ip = prompt('enter IPAddress: ')
function isIPAddress(ip){
  if(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip)){
    return ('is IPAddress')
  }
  return ('is invalid IPAddress')
  
}
alert(isIPAddress(ip))

let rgba = prompt('enter RGBA: ');
function findRGBA(rgba){
  if(/^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d*(?:\.\d+)?)\)$/.test(rgba)){
    return ('is RGBA');
  }
  return null;
}
alert(findRGBA(rgba))

let hex = prompt('enter hex: ')
function findHexColor(hex){
  if(/^#([0-9a-f]{6}|[0-9a-f]{3})$/i.test(hex)){
    return ('is Hex');
  }
  return null;
}
alert(findHexColor(hex))

let tag = prompt('enter text with tags: ')
function findTags(tag){
  let string = tag.replace(/(<([^>]+)>)/gi, " ")
  alert(string)
}
findTags(tag)

let num = prompt('enter numbers: ')
function findPosNum(num){
  var re = num.match(/\d+/g)
  return re
}
alert(findPosNum(num))

let date = prompt('enter date: ')
function findDates(date){
  if(/^\d\d\d\d-\d\d-\d\d$/.test(date)){
    return ('is date')
  }
  return ('is not date')
}
alert(findDates(date))

let email = prompt('enter email: ')
function findEmail(email){
  if (/^\w+@\w+\.\w+$/.test(email)){
		return ('is email')
	}
	return ('is not email')
}
alert(findEmail(email))