import axios from "axios";

const ApiKey = process.env.API_KEY;

export async function createUser(email, password) {
  const res = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + ApiKey,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );

  return res.data.idToken;
}

export async function loginUser(email, password) {
  const res = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
      ApiKey,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );

  return res.data.idToken;
}

export async function getEmail(idToken) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=" + ApiKey,
    {
      idToken: idToken,
    }
  );
  console.log(response.data.users[0].email);
  return response.data.users[0].email;
}

export async function storeItems(idToken, cloth) {
  try {
    await axios.post(
      "https://eezy76z3i0.execute-api.eu-central-1.amazonaws.com/dev/storeItem",
      {
        items: cloth,
      },
      {
        headers: {
          auth_token: idToken.token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function getMinimalism(idToken) {
  try {
    return await axios.get(
      "https://eezy76z3i0.execute-api.eu-central-1.amazonaws.com/dev/getMinimalism",
      {
        headers: {
          auth_token: idToken,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function getPieChart(idToken) {
  try {
    return await axios.get(
      "https://eezy76z3i0.execute-api.eu-central-1.amazonaws.com/dev/getPieChart",
      {
        headers: {
          auth_token: idToken,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function getGardrobe(idToken) {
  try {
    let res = await axios.get(
      "https://eezy76z3i0.execute-api.eu-central-1.amazonaws.com/dev/getGardrobe",
      {
        headers: {
          auth_token: idToken,
        },
      }
    );
    return res.data.data.clothes;
  } catch (error) {
    console.log(error);
  }
}
