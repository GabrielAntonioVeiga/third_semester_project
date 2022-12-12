import connection from "./connection";

//buscar todos os usuários
const getAll = async () => {
  const [users] = await connection.execute("SELECT * FROM students");
  return users;
};

//create
const createUser = async (user: any) => {
  const { name, email, password, id_classes } = user;
  const query =
    "INSERT INTO students (name, email, password, id_classes) VALUES (?, ?, ?, ?)";
  const params = [name, email, password, id_classes];
  const [createdUser] = await connection.execute(query, params);
  return createdUser;
  //or const createdUser = await connection.execute("INSERT INTO students (name, email, password, id_classes) VALUES (?, ?, ?, ?)", [name, email, password, id_classes])
};

//login
const loginUser = async (user: any) => {
  const { email, password } = user;
  const query = "SELECT id FROM students WHERE email=? AND password=?";
  const params = [email, password];
  const [userInfo] = await connection.execute(query, params);
  return userInfo;
};

export default { getAll, createUser, loginUser };
