import fs from 'fs';

export const ReadJsonFile = (content: string) => {
  if (!fs.existsSync(content)) throw new Error('@pixiview/defines: .json not exists in path!');

  const raw = fs.readFileSync(content);

  return JSON.parse(raw as any);
};

export const WriteJsonFile = (content: string, data: any): void => {
  if (fs.existsSync(content)) throw new Error('@pixiview/defines: .json exists in path!');

  try {
    fs.writeFileSync(content, JSON.stringify(data));
  } catch (e) {
    throw e;
  }
};
