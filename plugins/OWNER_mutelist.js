let handler = async (m, { conn, isAdmin }) => {
let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].ismuto)
let users = Object.entries(global.db.data.users).filter(user => user[1].muto)
let caption = `
┌〔𝐔𝐭𝐞𝐧𝐭𝐢 *mutati* 👨🏻‍✈️〕
├ 𝐓𝐨𝐭𝐚𝐥𝐞 : ${users.length} ${users ? '\n' + users.map(([jid], i) => `
├ ${isAdmin ? '@' + jid.split`@`[0] : jid}`.trim()).join('\n') : '├'}
└────
`.trim()
m.reply(caption, null, {mentions: conn.parseMention(caption)})}
handler.command = /^mutelist(ned)?|mute(ed)?list|mutati?$/i
handler.admin = true
export default handler
