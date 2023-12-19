let editTitle = ref('');
let editDate = ref('');
let editContent = ref('');

function GetEditItem() {

  const item = items.value.find((v) => v.id === id);

    editTitle.value = item.title;
    editDate.value = item.date;
    editContent.value = item.content;
}

export { editTitle, editDate, editContent, GetEditItem, items };