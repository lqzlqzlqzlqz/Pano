import React, { useRef } from 'react';
export default function VisualAngle({bottom, left, angle, setAngle, setIsSetAngle}) {
    const dragRef = useRef(null);
    // const [angle, setAngle] = useState(0);
    function onRotateMousedown(e) {
        console.log(e);
        e.stopPropagation()
        e.preventDefault()
        setIsSetAngle(true);
        const el = dragRef.current;
        const elRect = el.getBoundingClientRect()
        // 旋转中心位置
        const centerX = elRect.left + elRect.width / 2
        const centerY = elRect.top + elRect.height / 2

        function onMousemove(e) {
            const diffX = centerX - e.clientX
            const diffY = centerY - e.clientY
            // Math.atan2(y,x) 返回从原点 (0,0) 到 (x,y) 点的线段与 x 轴正方向之间的平面角度 (弧度值)
            const radians = Math.atan2(diffY, diffX)

            // 计算角度
            const angleNew = radians * 180 / Math.PI - 90 // 角度
            console.log(angleNew);
            setAngle(angleNew);
        }

        const onMouseup = (_e) => {
            setIsSetAngle(false);
            document.removeEventListener('mousemove', onMousemove)
            document.removeEventListener('mouseup', onMouseup)
        }
        document.addEventListener('mousemove', onMousemove)
        document.addEventListener('mouseup', onMouseup)
    }
  return (
    <img ref={dragRef} onMouseDown={onRotateMousedown} style={{transform: `translate(-50%, -100%) rotate(${angle}deg)`, transformOrigin: 'bottom center', filter: 'invert(1)', position: 'absolute', zIndex: 130, bottom: bottom, left: left, width: 57, height: 64}} alt="perspective" src="data:image/png;base64,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" draggable="false"></img>
  )
}