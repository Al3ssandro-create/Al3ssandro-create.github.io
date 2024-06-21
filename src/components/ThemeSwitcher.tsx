import { VisuallyHidden, useSwitch } from "@nextui-org/react";
import { HiSun, HiMoon } from "react-icons/hi";
function ThemeSwitcher(props: { className?: string, isSelected: boolean, onToggle: () => void }) {
  const { Component, slots, isSelected, getBaseProps, getInputProps, getWrapperProps } = useSwitch(props);

  return (
    <div style={{ color:"white"}}>
      <Component {...getBaseProps()}  onClick={props.onToggle}>
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
              "rounded-lg",
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