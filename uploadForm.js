const uploadForm = document.getElementById("form-upload");
const uploadStatus = document.getElementById("upload-status");

uploadForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  console.log(event);

  const replace = uploadForm.replace.value == "on" ? true : false;

  const result = await uploadFile(replace, uploadForm.file.files[0]);
  uploadStatus.className = result.err ? 'error' : ''
  uploadStatus.textContent = result.err || result.status;
});

const uploadFile = async (replace, file) => {
  const formData = new FormData();
  formData.append("file", file);

  const url = `${baseUrl}/files?password=${password}&replace=${replace}`;

  try {
    const resp = await fetch(url, {
      method: "post",
      body: formData,
    });

    if (!resp.ok) return { err: resp.statusText };
    return await { status: await resp.text() };
  } catch (e) {
    return { err: e };
  }
};
