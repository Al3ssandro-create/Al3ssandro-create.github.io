import { useEffect } from "react";
import { VisuallyHidden, useSwitch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";
function ThemeSwitcher(props: { className?: string}) {
  const { Component, slots, isSelected, getBaseProps, getInputProps, getWrapperProps } = useSwitch(props);
  const { setTheme } = useTheme();

  useEffect(() => {
    document.body.style.transition = 'background-color 0.5s ease';
    if (isSelected) {
      setTheme('light');
      document.body.style.backgroundColor = "white";
    } else {
      setTheme('dark');
      document.body.style.backgroundColor = "black";  
    }
  }, [isSelected, setTheme]);

  return (
    <div style={{position:"absolute", top:"10px", right:"10px", color:"white"}}>
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          style={{borderRadius: "20%"}}
          className={slots.wrapper({
            class: [
              "w-8 h-8",
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-default-600",
            ],
          })}
        >
          {isSelected ? <HiSun/> : <HiMoon/>}
        </div>
      </Component>
    </div>
  );
}

export default ThemeSwitcher;