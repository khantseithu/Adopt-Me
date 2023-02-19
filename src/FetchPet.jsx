const FetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes) {
    throw new Error(`/details/${id} fetch not oks`);
  }

  return apiRes.json();
};

export default FetchPet;
