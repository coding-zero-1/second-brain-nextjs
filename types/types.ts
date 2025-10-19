export interface ILandingPageCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export interface IButtonProps {
  text: string;
  icon?: React.ReactNode;
  type: "primary" | "secondary";
  onClickDo?: () => void;
}