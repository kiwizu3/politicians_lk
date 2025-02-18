import PeopleIcon from "@mui/icons-material/People";
import GroundTruth from "../../nonview/core/GroundTruth";
import AppColors from "../../view/_constants/AppColors";
import AbstractInnerPage from "../../view/pages/AbstractInnerPage";
import CandidatesLeaderBoard from "../../view/molecules/CandidatesLeaderBoard"

export default class CandidatePage extends AbstractInnerPage {
  get page() {
    return "CandidatePage";
  }
  get Icon() {
    return PeopleIcon;
  }

  get label() {
    return "Candidates";
  }

  get color() {
    return AppColors.Candidate;
  }

  render() {
    const { context } = this.props;
    const version = context.version;
    const criterionWeights = JSON.parse(context.criterionWeightsJSON);

    const candidateAndScore = GroundTruth.getSortedCandidateAndScore(
      version,
      criterionWeights
    );
    return (
      <CandidatesLeaderBoard candidateAndScore={candidateAndScore} />
    )

  }
}
