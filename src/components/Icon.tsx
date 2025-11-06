// Define tipos icone
type IconName = 'pill' | 'sun' | 'moon' | 'afternoon';

//Define as propriedades do Icon
type IconProps = {
    name: IconName;
    className?: string;
}

//Mapeia os emojis
const IconMap: Record<IconName, string> = {
    pill: '💊',
    sun: '☀️',
    moon: '🌙',
    afternoon: '🕛',
};

//Componente Icon
export default function Icon ({ name, className }: IconProps) {
    const ClassName = className;
    const symbol = IconMap[name];

    return (
        <span className={ClassName}> {symbol} </span>
    );
}