import { FC } from "react";
import "./index.scss";
import { ListType } from "@/types/cardType";

const Filter: FC<ListType> = ({ data, setCategoryData, categoryData }) => {
    let categoryNames = data.map(item => item.category);
    categoryNames = Array.from(new Set(categoryNames));

    const handleClick = (category: string) => {
        if (setCategoryData) {
            setCategoryData(prevState => {
                if (prevState.includes(category)) {
                    return prevState.filter(prev => prev !== category);
                }
                return [...prevState, category];
            });
        }
    }

    return (
        <section className="filter">
            <nav className="filter-wrapper">
                <h1>News</h1>
                <ul>
                    {categoryNames.map((item, index) => (
                        <li key={index} onClick={() => handleClick(item)} className={categoryData?.includes(item) ? 'active' : ''}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <path d="M4.97839 4.9782C4.97839 4.00369 4.97839 3.17911 4.97839 2.35453C5.00338 1.13015 5.5531 0.430508 6.50262 0.505469C7.67702 0.580431 8.00185 1.38003 7.97687 2.42949C7.95188 3.22909 7.97687 4.00369 7.97687 5.00318C8.9014 5.00318 9.80094 5.00318 10.7005 5.00318C11.725 5.00318 12.4496 5.40298 12.4496 6.50242C12.4496 7.57688 11.725 8.00166 10.7005 8.00166C9.82593 8.00166 8.97636 8.00166 7.97687 8.00166C7.97687 8.87622 7.97687 9.65082 7.97687 10.4504C7.97687 11.7997 7.47712 12.4744 6.50262 12.4994C5.50312 12.5244 4.97839 11.7997 4.97839 10.3755C4.97839 9.62584 4.97839 8.9012 4.97839 8.00166C4.00389 8.00166 3.10434 8.02665 2.2048 8.00166C1.10536 7.97667 0.430702 7.35199 0.505663 6.45245C0.580625 5.40298 1.2303 4.9782 2.17981 4.9782C3.05437 4.9782 3.92892 4.9782 4.97839 4.9782Z" fill="#052C54" />
                            </svg>
                            <svg className="active" xmlns="http://www.w3.org/2000/svg" width="13" height="9" viewBox="0 0 13 9" fill="none">
                                <path d="M12.3 1.60564C12.2626 1.71768 12.244 1.84838 12.188 1.94175C12.0946 2.1098 11.9826 2.29653 11.8518 2.44591C9.8352 4.48123 7.79988 6.51654 5.76456 8.55186C5.16704 9.14939 4.32677 9.13071 3.72924 8.55186C2.72092 7.56221 1.73127 6.55389 0.741622 5.56424C0.349497 5.15344 0.200116 4.68663 0.368169 4.12645C0.536223 3.58494 0.928349 3.24883 1.48853 3.15547C1.918 3.08078 2.3288 3.21149 2.64623 3.51025C3.00101 3.84636 3.33712 4.18246 3.67323 4.51857C3.93464 4.77999 4.19606 5.04141 4.45748 5.30282C4.66288 5.50822 4.8496 5.50822 5.055 5.30282C6.66085 3.69698 8.2667 2.09113 9.87254 0.466609C10.1153 0.223864 10.3954 0.0744832 10.7315 0.0184652C11.4597 -0.074898 12.1506 0.410591 12.2813 1.13882C12.2813 1.1575 12.3 1.19484 12.3 1.21351C12.3 1.3629 12.3 1.4936 12.3 1.60564Z" fill="white" />
                            </svg>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

            </nav>
        </section>
    )
}

export default Filter;