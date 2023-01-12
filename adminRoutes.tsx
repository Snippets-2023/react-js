import PageNotFound from 'pages/pageNotFound';
import CheckEmail from 'pages/check-email';
import ResetPassword from 'pages/reset-password';
import SuccessfullyRegisterd from 'pages/successfully-registered';
import ForgotPassword from 'pages/forgot-password';
import ForceUpdate from 'pages/force-update';
import FreezeApp from 'pages/freeze-app';
import Login from 'pages/login';
import NBOMission from 'components/nbo-Mission/NBO_Mission';
import TermsConditions from 'pages/terms&conditions';
import {
  CHECK_EMAIL,
  FORCE_UPDATE_ROUTE,
  FORGET_PASSWORD,
  FREEZE_APP_ROUTE,
  LOGIN_HOME,
  NBO_MISSION_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
  RESET_PASSWORD_ROUTE,
  SUCCESSFULLY_REGISTERED,
  TERMS_CONDITION_ROUTE,
  PR_NEWS_ROUTE,
  PROMOTIONS_ROUTE,
  BANNER,
  MISSION_ROUTE,
  DUPLICATE_MISSION,
  CREATE_MISSION,
  UPDATE_MISSION,
  SHOW_MISSION,
  SHOW_PR_NEWS_ROUTE,
  EDIT_PR_NEWS_ROUTE,
  PR_NEWS_TRASH,
  CREATE_PR_NEWS_ROUTE,
  ACTIVITY_ROUTE,
  EDIT_ACTIVITY_ROUTE,
  CREATE_PROMOTIONS_ROUTE,
  EDIT_PROMOTIONS_ROUTE,
  SHOW_PROMOTIONS_ROUTE,
  CREATE_BANNER_ROUTE,
  SHOW_BANNER_ROUTE,
  EDIT_BANNER_ROUTE,
  CREATE_NBO_MISSION,
  SHOW_NBO_MISSION,
  EDIT_NBO_MISSION,
  PROMOTIONS_TRASH,
  BANNER_TRASH,
  MISSION_TRASH,
  NBO_MISSION_TRASH,
  PRIVILEGE_MANAGEMENT,
  CATEGORY_MANAGEMENT,
  EDIT_CATEGORY_ROUTE,
  EDIT_PRIVILEGE_ROUTE,
  BU_CODE_MASTER_DATA,
  REGISTRATION_MASTER_DATA,
  HISTORY_REPORT,
  CREATE_POINT_TRANSFER_ROUTE,
  EDIT_POINT_TRANSFER_ROUTE,
  STORY_FEED,
  STORY_FEED_TRASH,
  POINT_TRANSFER_ROUTE,
  POINT_TRANSFER_TRASH,
  CREATE_STORY_ROUTE,
  SHOW_STORY_ROUTE,
  EDIT_STORY_ROUTE
} from '../constants/routesPathConstant';
import PR_news from 'components/pr-news/PR_news';
import Promotion from 'components/promotions/Promotion';
import BannerHome from 'components/banner/BannerHome';
import MissionHome from 'components/mission/Mission';
import DuplicateMission from 'components/mission/DuplicateMission';
import CreateMissions from 'components/mission/create-mission';
import EditMission from 'components/mission/EditMission';
import ShowMission from 'components/mission/ShowMission';
import ShowPRNews from 'components/pr-news/show-PR-news';
import EditPRNews from 'components/pr-news/edit-PR-news';
import PrNewsTrashList from 'components/pr-news/trash';
import PromotionTrashList from 'components/promotions/trash';
import BannerTrashList from 'components/banner/trash';
import NBOTrashList from 'components/nbo-Mission/trash';
import MissionTrashList from 'components/mission/trash';
import createPRNews from 'components/pr-news/create-PR-news';
import editActivity from 'components/activity-mangement/edit-activity';
import ActivityManagemntHome from 'components/activity-mangement/Activity';
import CreatePromotion from 'components/promotions/Create-Promotion';
import EditPromotion from 'components/promotions/Edit-Promotion';
import ShowPromotion from 'components/promotions/Show-Promotion';
import CreateBanner from 'components/banner/Create-Banner';
import EditBanner from 'components/banner/Edit-Banner';
import ShowBanner from 'components/banner/Show-Banner';
import createNBO from 'components/nbo-Mission/create-NBO';
import EditNBO from 'components/nbo-Mission/Edit-NBO';
import showNBO from 'components/nbo-Mission/show-NBO';
import PrivilegeManagement from 'components/privilege-management/Privilege_management';
import CategoryManagement from 'components/category-management/Category_management';
import EditCategory from 'components/category-management/edit-category';
import EditPrivilege from 'components/privilege-management/Edit_privilege';
import WalletRegistration from 'pages/wallet/registrationMasterData';
import TransactionHistoryReport from 'pages/wallet/transactionHistoryReport';
import StoryFeedManagement from 'pages/story-feed-management/storyFeedManagement';
import StoryFeedTrashList from 'pages/story-feed-management/trash';
import PointTransfer from 'components/point-transfer-management/PointTransfer';
import PointTransferTrashList from 'components/point-transfer-management/trash';

import CreatePointTransfer from 'components/point-transfer-management/Create-PointTransfer';
import EditPointTransfer from 'components/point-transfer-management/Edit-PointTransfer';

import CreateStory from 'pages/story-feed-management/createStory';
import UpdateStory from 'pages/story-feed-management/updateStory';
import ShowStory from 'pages/story-feed-management/showStoryFeed';

export const ADMIN_ROUTES = [
  { path: LOGIN_HOME, component: Login },
  { path: FORCE_UPDATE_ROUTE, component: ForceUpdate },
  { path: FREEZE_APP_ROUTE, component: FreezeApp },
  { path: RESET_PASSWORD_ROUTE, component: ResetPassword },
  { path: FORGET_PASSWORD, component: ForgotPassword },
  { path: CHECK_EMAIL, component: CheckEmail },
  { path: TERMS_CONDITION_ROUTE, component: TermsConditions },
  { path: SUCCESSFULLY_REGISTERED, component: SuccessfullyRegisterd },
  { path: PAGE_NOT_FOUND_ROUTE, component: PageNotFound },

  { path: PR_NEWS_ROUTE, component: PR_news },
  { path: CREATE_PR_NEWS_ROUTE, component: createPRNews },
  { path: SHOW_PR_NEWS_ROUTE, component: ShowPRNews },
  { path: EDIT_PR_NEWS_ROUTE, component: EditPRNews },
  { path: PR_NEWS_TRASH, component: PrNewsTrashList },

  { path: PROMOTIONS_ROUTE, component: Promotion },
  { path: CREATE_PROMOTIONS_ROUTE, component: CreatePromotion },
  { path: EDIT_PROMOTIONS_ROUTE, component: EditPromotion },
  { path: SHOW_PROMOTIONS_ROUTE, component: ShowPromotion },
  { path: PROMOTIONS_TRASH, component: PromotionTrashList },

  { path: BANNER, component: BannerHome },
  { path: CREATE_BANNER_ROUTE, component: CreateBanner },
  { path: SHOW_BANNER_ROUTE, component: ShowBanner },
  { path: EDIT_BANNER_ROUTE, component: EditBanner },
  { path: BANNER_TRASH, component: BannerTrashList },

  { path: NBO_MISSION_ROUTE, component: NBOMission },
  { path: CREATE_NBO_MISSION, component: createNBO },
  { path: SHOW_NBO_MISSION, component: showNBO },
  { path: EDIT_NBO_MISSION, component: EditNBO },
  { path: NBO_MISSION_TRASH, component: NBOTrashList },

  { path: MISSION_ROUTE, component: MissionHome },
  { path: DUPLICATE_MISSION, component: DuplicateMission },
  { path: CREATE_MISSION, component: CreateMissions },
  { path: UPDATE_MISSION, component: EditMission },
  { path: SHOW_MISSION, component: ShowMission },
  { path: MISSION_TRASH, component: MissionTrashList },

  { path: ACTIVITY_ROUTE, component: ActivityManagemntHome },
  { path: EDIT_ACTIVITY_ROUTE, component: editActivity },

  { path: PRIVILEGE_MANAGEMENT, component: PrivilegeManagement },
  { path: EDIT_PRIVILEGE_ROUTE, component: EditPrivilege },

  { path: CATEGORY_MANAGEMENT, component: CategoryManagement },
  { path: EDIT_CATEGORY_ROUTE, component: EditCategory },

  { path: REGISTRATION_MASTER_DATA, component: WalletRegistration },
  { path: BU_CODE_MASTER_DATA, component: WalletRegistration },
  { path: HISTORY_REPORT, component: TransactionHistoryReport },

  { path: POINT_TRANSFER_ROUTE, component: PointTransfer },
  { path: POINT_TRANSFER_TRASH, component: PointTransferTrashList },
  { path: CREATE_POINT_TRANSFER_ROUTE, component: CreatePointTransfer },
  { path: EDIT_POINT_TRANSFER_ROUTE, component: EditPointTransfer },

  { path: STORY_FEED, component: StoryFeedManagement },
  { path: CREATE_STORY_ROUTE, component: CreateStory },
  { path: EDIT_STORY_ROUTE, component: UpdateStory },
  { path: SHOW_STORY_ROUTE, component: ShowStory },
  { path: STORY_FEED_TRASH, component: StoryFeedTrashList }
];
