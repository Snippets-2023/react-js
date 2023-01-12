import { BannerServiceClient } from 'packages/explore-grpc-web-bbff/xplore-grpc-web-bbff/BannerServiceClientPb';
import { CampaignServiceClient } from 'packages/explore-grpc-web-bbff/xplore-grpc-web-bbff/CampaignServiceClientPb';
import { MissionServiceClient } from 'packages/explore-grpc-web-bbff/xplore-grpc-web-bbff/MissionServiceClientPb';
import { RewardServiceClient } from 'packages/explore-grpc-web-bbff/xplore-grpc-web-bbff/RewardServiceClientPb';
import React, { createContext, ReactNode, useMemo } from 'react';
import { AccountServiceClient, PromotionServiceClient } from '../packages/explore-grpc-web-bbff';

interface IApiContext {
  accountsvc: AccountServiceClient;
  promotionsvc: PromotionServiceClient;
  rewardsvc: RewardServiceClient;
  bannersvc: BannerServiceClient;
  missionsvc: MissionServiceClient;
  campaignsvc: CampaignServiceClient;
  walletsvc: CampaignServiceClient;
}

export const ApiContext = createContext<IApiContext | null>(null);

const { Provider } = ApiContext;

interface ApiProviderProps {
  children: ReactNode;
  baseUrl: string;
}

export const ApiProvider = ({ children, baseUrl }: ApiProviderProps) => {
  const accountsvc = useMemo(() => {
    return new AccountServiceClient(baseUrl, null, null);
  }, [baseUrl]);

  const promotionsvc = useMemo(() => {
    return new PromotionServiceClient(baseUrl, null, null);
  }, [baseUrl]);

  const rewardsvc = useMemo(() => {
    return new RewardServiceClient(baseUrl, null, null);
  }, [baseUrl]);

  const bannersvc = useMemo(() => {
    return new BannerServiceClient(baseUrl, null, null);
  }, [baseUrl]);

  const missionsvc = useMemo(() => {
    return new MissionServiceClient(baseUrl, null, null);
  }, [baseUrl]);

  const campaignsvc = useMemo(() => {
    return new CampaignServiceClient(baseUrl, null, null);
  }, [baseUrl]);

  const walletsvc = useMemo(() => {
    return new CampaignServiceClient(baseUrl, null, null);
  }, [baseUrl]);

  return (
    <Provider
      value={{
        accountsvc,
        promotionsvc,
        rewardsvc,
        bannersvc,
        missionsvc,
        campaignsvc,
        walletsvc
      }}
    >
      {children}
    </Provider>
  );
};
