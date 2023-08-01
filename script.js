function changeItem(item) {
    const names = ["beautiful", "lovely", "passionate", "caring", "wonderful", "magical", "inspire", "cool", "memories"];
    const colors = ["pink", "blue", "orange", "yellow", "purple", "red", "grey", "lemon", "green"];
  
    const randomIndex = Math.floor(Math.random() * names.length);
    const newName = names[randomIndex];
    const newColor = colors[randomIndex];
  
    item.querySelector('.text').textContent = newName;
    item.style.backgroundColor = newColor;
  }