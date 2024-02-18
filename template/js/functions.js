var linkUnitApproval = document.getElementById("linkUnitApproval");
var linkUserList = document.getElementById("linkUserList");
var linkPerfil = document.getElementById("linkPerfil");

if (linkUnitApproval) {
  linkUnitApproval.addEventListener("click", function () {
    window.location.href = "UnitApproval1.html";
  });
}

if (linkUserList) {
  linkUserList.addEventListener("click", function () {
    window.location.href = "UserList.html";
  });
}

if (linkPerfil) {
  linkPerfil.addEventListener("click", function () {
    window.location.href = "Perfil.html";
  });
}

var NavItem1 = document.getElementById("navItem1");
var NavItemContent1 = document.getElementById("navItemContent1");
var NavItem2 = document.getElementById("navItem2");
var NavItemContent2 = document.getElementById("navItemContent2");

if (NavItem1) {
  NavItem1.addEventListener("mouseover", function () {
    NavItem1.classList.add("demoNavItemHover");
    NavItemContent1.classList.add("demoShowItem");
  });

  NavItem1.addEventListener("mouseout", function () {
    NavItem1.classList.remove("demoNavItemHover");
    NavItemContent1.classList.remove("demoShowItem");
  });
}

if (NavItemContent1) {
  NavItemContent1.addEventListener("mouseover", function () {
    NavItem1.classList.add("demoNavItemHover");
    NavItemContent1.classList.add("demoShowItem");
  });

  NavItemContent1.addEventListener("mouseout", function () {
    NavItem1.classList.remove("demoNavItemHover");
    NavItemContent1.classList.remove("demoShowItem");
  });
}

if (NavItem2) {
  NavItem2.addEventListener("mouseover", function () {
    NavItem2.classList.add("demoNavItemHover");
    NavItemContent2.classList.add("demoShowItem");
  });

  NavItem2.addEventListener("mouseout", function () {
    NavItem2.classList.remove("demoNavItemHover");
    NavItemContent2.classList.remove("demoShowItem");
  });
}

if (NavItemContent2) {
  NavItemContent2.addEventListener("mouseover", function () {
    NavItem2.classList.add("demoNavItemHover");
    NavItemContent2.classList.add("demoShowItem");
  });

  NavItemContent2.addEventListener("mouseout", function () {
    NavItem2.classList.remove("demoNavItemHover");
    NavItemContent2.classList.remove("demoShowItem");
  });
}
