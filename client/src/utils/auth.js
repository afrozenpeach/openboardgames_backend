export const authenticated = async () => {
    const resp = await fetch("http://localhost:3001/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true
        }
    });

    if (resp.status === 200) {
        return true;
    } else {
        return false;
    }
}

export default authenticated