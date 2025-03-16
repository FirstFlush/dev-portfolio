import { CheckCircle, AlertTriangle, Info, XCircle, LucideProps } from "lucide-react";
import React, { ForwardRefExoticComponent, RefAttributes } from "react";

interface NotificationProps {
    title: string;
    children: React.ReactNode
    variant?: "success" | "danger" | "warning" | "info" | "default";
    icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
}

const variantConfig = {
    success: { 
        icon: CheckCircle, 
        bg: "bg-green-200", 
        text: "text-green-900", 
        border: "border-green-600" 
    },
    danger: { 
        icon: XCircle, 
        bg: "bg-red-200", 
        text: "text-red-900", 
        border: "border-red-600" 
    },
    warning: { 
        icon: AlertTriangle, 
        bg: "bg-yellow-200", 
        text: "text-yellow-600", 
        border: "border-yellow-400" 
    },
    info: { 
        icon: Info, 
        // bg: "bg-blue-100 bg-gradient-to-r from-blue-200 to-blue-100", 
        bg: "bg-blue-200", 
        text: "text-blue-600", 
        border: "border-blue-700" 
    },
    default: { 
        icon: Info, 
        bg: "bg-gray-200", 
        text: "text-gray-900", 
        border: "border-gray-600" 
    },
};

const Alert = ({ title, children, variant = "default", icon }: NotificationProps) => {
    const config = variantConfig[variant];
    const IconComponent = icon || config.icon;

    return (
        // <div className={`not-prose py-2 px-4 flex flex-col rounded-sm shadow-lg max-w-fit border-l-4 ${config.bg} ${config.text} ${config.border}`}>
        // <div className={`not-prose p-4 border-l-4 ${config.border} bg-white dark:bg-zinc-900 shadow-sm`}>
        <div className={`not-prose p-4 border-l-4 rounded-r-md ${config.border} bg-zinc-100 dark:bg-zinc-800/60 shadow-sm`}>
            <div className="flex items-center mb-2">
                <IconComponent size={28} className={`mr-3 ${config.text}`} />
                <h4 className={`text-lg ${config.text} font-semibold`}>{title}</h4>
            </div>
            <div className="leading-relaxed">{children}</div>
        </div>
    );
};

export default Alert;















// // components/Alert.tsx
// import { ReactNode } from 'react';

// type AlertProps = {
//   type?: 'info' | 'warning' | 'success';
//   children: ReactNode;
// };

// export default function Alert({ type = 'info', children }: AlertProps) {
//   const bgColor = {
//     info: 'bg-blue-100 border-blue-500 text-blue-700',
//     warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
//     success: 'bg-green-100 border-green-500 text-green-700',
//   };

//   return (
//     <div className={`border-l-4 p-4 my-4 ${bgColor[type]}`}>
//       {children}
//     </div>
//   );
// }
