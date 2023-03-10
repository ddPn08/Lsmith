/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BuildEngineProgress
 */
export interface BuildEngineProgress {
    /**
     * 
     * @type {string}
     * @memberof BuildEngineProgress
     */
    type?: BuildEngineProgressTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BuildEngineProgress
     */
    message: string;
    /**
     * 
     * @type {number}
     * @memberof BuildEngineProgress
     */
    progress: number;
}


/**
 * @export
 */
export const BuildEngineProgressTypeEnum = {
    result: 'result'
} as const;
export type BuildEngineProgressTypeEnum = typeof BuildEngineProgressTypeEnum[keyof typeof BuildEngineProgressTypeEnum];


/**
 * Check if a given object implements the BuildEngineProgress interface.
 */
export function instanceOfBuildEngineProgress(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "message" in value;
    isInstance = isInstance && "progress" in value;

    return isInstance;
}

export function BuildEngineProgressFromJSON(json: any): BuildEngineProgress {
    return BuildEngineProgressFromJSONTyped(json, false);
}

export function BuildEngineProgressFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildEngineProgress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'message': json['message'],
        'progress': json['progress'],
    };
}

export function BuildEngineProgressToJSON(value?: BuildEngineProgress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'message': value.message,
        'progress': value.progress,
    };
}

