import i18n from "i18next";
import {initReactI18next} from "react-i18next";


const resources = {
    en: {
        translation: {
            "name": "Takato Okudo",
            "intro": "Hello! I'm Takato Okudo. I'm a software engineer and a Ph.D. student. I am interested in the learning algorithms such as the Reinforcement Learing(RL).",
            "keyword_title": "Research Interests",
            "education_title": "Education",
            "news_title": "News",
            "publication_title": "Publication",
            "award_title": "Awards",
            "project_title": "Projects",
            "phd": "Ph.D. (Expected 2023), The Graduate University for Advanced Studies, Kanagawa, Japan",
            "bachelor": "Bachelors of Informatics (2018), National Institute of Technology, Nara College, Nara, Japan"
        }
    },
    ja: {
        translation: {
            "name": "奥戸 嵩登",
            "intro": "ソフトウェアエンジニア兼大学院生をやっています。学習エージェント、特に強化学習に興味を持っています。人の知識を強化学習に利用する研究をしています。",
            "keyword_title": "研究キーワード",
            "education_title": "学歴",
            "news_title": "ニュース",
            "publication_title": "業績",
            "award_title": "受賞",
            "project_title": "プロジェクト",
            "phd": "2023年 総合研究大学院大学 博士後期課程修了見込",
            "bachelor": "2018年 奈良工業高等専門学校専攻科 修了"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false
        }
    });

    export default i18n;
