import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import standingStudent from "../../../static/img/standing_student.png";
import sittingStudent1 from "../../../static/img/sitting_student1.png";
import sittingStudent2 from "../../../static/img/sitting_student2.png";

const FeatureList = [
  {
    title: "학생 구직자들이 얻기힘든 기업정보",
    Png: standingStudent,
    description: (
      <>
        구직자들이 취용플랫폼, SNS, 커뮤니티 등등에서 기업정보를 얻지만 정작
        도움이 되는 정도는 그리 높지 않습니다. 그 중 학생 구직자들은 어떤정보를
        모아야할지 잘 모른다는 점과 정보를 얻을 만한 선배가 없다는 문제가
        있었습니다.
      </>
    ),
  },
  {
    title: "학교 내에 존재하지 않는 서비스",
    Png: sittingStudent1,
    description: (
      <>
        입학, 학교 생활 관리는 동아리 내에서 자체적으로 운영하고 있는 방면, 가장
        중요한 취업은 외부 서비스나 취업담당자에게 의존하고 있습니다. 그래서
        Stubee팀은 우리가 한번 만들어볼까?라는 생각에 Rolling을 개발하였습니다.
      </>
    ),
  },
  {
    title: "학생들을 위한 LinkedIn을 목표로!",
    Png: sittingStudent2,
    description: (
      <>
        취업 정보 서비스들은 매우 많습니다. 하지만 학생들만을 위한 서비스는
        존재하지 않습니다. 그렇기에 저희는 학교라는 시장에서 학생들을 타켓으로
        MVP 개발 단계를 거처 학생들을 위한 LinkedIn을 목표로 나아가고 있습니다.
      </>
    ),
  },
];

function Feature({ Png, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={Png} className={styles.featurePng} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
