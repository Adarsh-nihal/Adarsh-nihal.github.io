import styled from "styled-components";

const MenuButton = ({ openMenuBar }) => {
  return (
    <>
      <MenuWrapper>
        <MenuBar
          style={{
            transform: `${
              openMenuBar
                ? "translateY(10px) rotate(45deg)"
                : "translateY(0px) rotate(0deg)"
            }`,
          }}
        />
        <MenuBar
          style={{
            visibility: `${openMenuBar ? "hidden" : "visible"}`,
            transform: `${
              openMenuBar
                ? "translateY(0px) rotate(45deg)"
                : "translateY(0px) rotate(0deg)"
            }`,
          }}
        />
        <MenuBar
          style={{
            transform: `${
              openMenuBar
                ? "translateY(-10px) rotate(-45deg)"
                : "translateY(0px) rotate(0deg)"
            }`,
          }}
        />
      </MenuWrapper>
    </>
  );
};

const MenuBar = styled.div`
  width: 35px;
  height: 5px;
  background-color: white;
  transition: 200ms;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export default MenuButton;