import { useSwitch } from "@nextui-org/react";

interface IconProps {
  style?: React.CSSProperties;
}

type IconComponentType = React.ComponentType<IconProps>;

interface WrapperProps {
  IconComponent: IconComponentType;
}

const WrapperComponent: React.FC<WrapperProps> = ({ IconComponent }) => {
  const { Component, slots, getBaseProps, getWrapperProps } = useSwitch();

  return (
    <div style={{ color:"white", marginBottom:"5px"}}>
      <Component {...getBaseProps()}>
        <div
          {...getWrapperProps()}
          style={{borderRadius: "20%"}}
          className={slots.wrapper({
            class: [
              "w-8 h-8 changeColor",
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-default-600",
            ],
          })}
        >
          <IconComponent style={{color:"white"}} />
        </div>
      </Component>
    </div>
  );
};

export default WrapperComponent;