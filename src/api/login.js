import instance from '@/utils/request.js';
/**
 * 获取验证码的接口
 */
export function GetSms(data){
    instance.request({
        method: "post",
        url: "/getSms/",
        data: data
    })
} 

/**
 * 登录
 */


/**
 * 注册
 */

 
/**
 * 获取用户角色
 */