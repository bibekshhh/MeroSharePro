import getAuthToken from './utils/getAuthToken.js'
import getIPOList from './utils/get_IPO_List.js'

async function applyIPO() {
    const token = await getAuthToken()
    if (!token) return

    const applicableIssue = await getIPOList(token);
    console.log(applicableIssue)
}

applyIPO()