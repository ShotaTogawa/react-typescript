interface ChildProps {
    color: string,
    onClick: () => void
}

// ReactのComponentではない。
export const Child = ({color, onClick}: ChildProps) => {
    return (
        <div>
            {color}
            <button onClick={onClick}></button>
        </div>
    )
}

// 明示的にReactのComponentと宣言する。
// FC(FunctionalComponent)を定義すれば、children propsが使える
export const ChildAsFC: React.FC<ChildProps> = ({color, onClick}) => {
    return (
        <div>
            {color}
            <button onClick={onClick}></button>
        </div>
    )
}