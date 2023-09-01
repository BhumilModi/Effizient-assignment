export function postForm(formData) {
  const data = fetch("/submit", {
    method: 'POST',
    body: formData
  }).then(res => res.json())

  return data
}