const addForm = document.getElementById("form-add");
const addStatus = document.getElementById("add-status");

addForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = addForm.name.value;
  const key = addForm.key.value;
  const author = addForm.author.value;
  const description = addForm.description.value;
  const lang = addForm.lang.value;
  const type = addForm.type.value;
  const version = addForm.version.value;

  let icon = addForm.icon.value || addForm.iconFile.files[0];
  if (typeof icon == "object") icon = await uploadFile(false, icon);

  let link = addForm.link.value || addForm.linkFile.files[0];
  if (typeof link == "object") link = await uploadFile(false, link);

  const result = await addComponent(
    key,
    name,
    link,
    author,
    description,
    lang,
    type,
    version,
    icon
  );
    
  addStatus.className = result.err ? 'error' : ''
  addStatus.textContent = result.err || result.status;
});

const addComponent = async (
  key,
  name,
  link,
  author,
  description,
  lang,
  type,
  version,
  icon
) => {
  const url = `${baseUrl}/\
components?password=${password}\
&key=${key}\
&icon=${icon}\
&link=${link}\
&author=${author}\
&name=${name}\
&description=${description}\
&locale=${lang}\
&type=${type}\
&version=${version}`;

  try {
    const resp = await fetch(url, { method: "post" });
    if (!resp.ok) return { err: resp.statusText };
    return await { status: resp.text() };
  } catch (e) {
    return { err: e };
  }
};
