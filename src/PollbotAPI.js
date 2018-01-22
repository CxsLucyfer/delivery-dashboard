// @flow
import type {
  APIVersionData,
  CheckResult,
  OngoingVersionsDict,
  ReleaseInfo,
} from './types';

export const SERVER = 'https://pollbot.dev.mozaws.net/v1';

export async function getOngoingVersions(): Promise<OngoingVersionsDict> {
  const response = await fetch(`${SERVER}/firefox/ongoing-versions`);
  return response.json();
}

export async function getReleaseInfo(version: string): Promise<ReleaseInfo> {
  const response = await fetch(`${SERVER}/firefox/${version}`);
  return response.json();
}

export async function checkStatus(url: string): Promise<CheckResult> {
  const response = await fetch(url);
  return response.json();
}

export async function getPollbotVersion(): Promise<APIVersionData> {
  const response = await fetch(`${SERVER}/__version__`);
  return response.json();
}
