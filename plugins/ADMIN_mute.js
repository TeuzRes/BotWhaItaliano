let handler = async (m, { conn, participants, usedPrefix, command }) => {
let BANtext = `chi? tagga qualcuno`
if (!m.mentionedJid[0] && !m.quoted) return 
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.chat
let users = global.db.data.users
users[who].muto = true
m.reply('*Mutato* 𝐜𝐨𝐧 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐨 ✓ *tutti i messaggi inviati ti verranno eliminati. soffri in silenzio.*')  }
handler.command = /^muta$/i
handler.admin = true
export default handler
