const navMenuToggle = () =>{
  const smallNavBtn = document.querySelector('.small__nav-btn');
  const smallNavArrow = document.querySelector('.small__nav-arrow');
  const smallNavMenu = document.querySelector('.small__nav-menu')
  const logo = document.querySelector('.logo > svg');

  // state
  let isSmallNavOpen = false

  smallNavBtn.addEventListener('click', () =>{
    isSmallNavOpen = !isSmallNavOpen
    if(isSmallNavOpen){
      smallNavMenu.style.top = '0'
      smallNavArrow.style.transform = 'rotate(180deg)'
      smallNavBtn.style.color = 'white'
      logo.style.fill = 'white'
      document.body.style.overflowY = 'hidden';
    }else{
      smallNavMenu.style.top = '-100vh'
      smallNavArrow.style.transform = 'rotate(0deg)'
      smallNavBtn.style.color = '#000000'
      logo.style.fill = '#000000'
      document.body.style.overflowY = 'auto';
    }
    
  })
}

export default navMenuToggle;