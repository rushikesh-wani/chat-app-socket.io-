export const scrollTOBottom = (chatBox) => {
  console.log(chatBox);

  if (chatBox.current) {
    chatBox.current.scroll({
      top: chatBox.current.scrollHeight,
      behavior: "smooth",
    });
  }
};
