import miniprojectTimer from '../assets/miniproject-timer.png'
import miniprojectWeather from '../assets/miniproject-weather.png'
import miniprojectWiFiSpot from '../assets/miniproject_Wi-Fi_Spot.png'
import miniprojectLanguageGame from '../assets/miniproject-language_game.png'


export const projectList = [
    {
        title: '타이머',
        description: '온라인에서 타이머를 사용할 수 있는 사이트',
        tags: [
            { label: 'React', variant: 'neutral' },
            { label: 'Node', variant: 'info' },
        ],
        image: miniprojectTimer,
        imageAlt:'타이머 프로젝트 화면',
    },
    {
        title: '날씨 앱',
        description: '생활하고 있는 자신의 지역 또는 다른 지역의 날씨를 확인할 수 있는 사이트',
        tags: [
            { label: 'TypeScript', variant: 'neutral' },
            { label: 'Testing', variant: 'success' },
        ],
        image: miniprojectWeather,
        imageAlt:'날씨 앱 프로젝트 화면',
    },
    {
        title: 'Wi-Fi Spot',
        description: '특정 지역에 공중화장실의 위치를 표시하는 사이트',
        tags: [
            { label: 'DevOps', variant: 'warning' },
            { label: 'Cloud', variant: 'info' },
        ],
        image: miniprojectWiFiSpot,
        imageAlt:'Wi-Fi Spot 프로젝트 화면',
    },
    {
        title: '끝말잇기',
        description: '혼자서도 끝말잇기 게임을 즐길 수 있는 사이트',
        tags: [
            { label: 'DevOps', variant: 'warning' },
            { label: 'Cloud', variant: 'info' },
        ],
        image: miniprojectLanguageGame,
        imageAlt:'끝말잇기 프로젝트 화면',
    },
]

