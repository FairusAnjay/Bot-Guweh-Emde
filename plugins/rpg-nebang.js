let handler = async (m, { 
	conn,
	usedPrefix 
}) => {
    let __timers = (new Date - global.db.data.users[m.sender].lastlumber)
    let _timers = (10800000 - __timers)
    let timers = clockString(_timers) 
    let user = global.db.data.users[m.sender]
    if (user.stamina < 20) return m.reply(`Stamina anda tidak cukup untuk bekerja\nharap isi stamina anda dengan _${usedPrefix}eat_`)
    if (user.axe < 1) return m.reply(`Kamu tidak memiliki pancing\nSilahkan membeli pancing di shop dengan mengetik _${usedPrefix}buy_ atau _${usedPrefix}craft_ agar kamu bisa menebang`)
    if (user.axedurability < 10) return m.reply(`Durability pancing anda kurang\nSilahkam repair axe agar bisa berburu dengan menggunakan command _${usedPrefix}repair_`)
    if (user.lastlumber > 500000) throw m.reply(`Kamu masih kelelahan untuk Menebang\nHarap tunggu ${timers} lagi untuk berburu`)
	user.axedurability -= 5
	user.stamina -= 20
    	user.money += 30000
  	  user.kayu += 300
        user.exp += 100
        user.lastlumber = new Date * 1
      setTimeout(() => {
                     m.reply(`Kamu Menjadi Penebang Pohon Dan Kamu Mendapat *20000* money , *100* exp dan 300 kayu\nStamina anda berkurang -20`)
                     }, 30000) 
                     
                     setTimeout(() => {
                     m.reply(`_Mengecek hasil_`)
                     }, 20000) 
               
                     setTimeout(() => {
                     m.reply(`_Menaruh Ke Dalam Gudang_`)
                      }, 15000)
                    
                     setTimeout(() => {
                     m.reply(`_Mengambil Batang Pohon_`)
                     }, 10000) 
                    
                     setTimeout(() => {
                     m.reply(`_Nguenggg_`)
                     }, 5000) 
                     
                     setTimeout(() => {
                     m.reply(`_Proses Menebang..._`)
                     }, 0)
}
handler.help = ['nebang']
handler.tags = ['rpg']
handler.command = /^(nebang)$/i
export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
