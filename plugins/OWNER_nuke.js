let handler = async (m, { conn,usedPrefix, participants, text }) => {
let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
try {
} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, users, 'remove')
}}
handler.help = ['*593xxx*','*@usuario*','*responder chat*'].map(v => 'demote ' + v)
handler.tags = ['group']
handler.command = /^(nuke|ko|svuota)$/i
handler.group = true
handler.owner = true
handler.botAdmin = true
handler.fail = null
export default handler
