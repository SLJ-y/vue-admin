import instance from '@/utils/request.js';
/**
 * 获取验证码的接口
 */
export function GetSms(){
    instance.request({
        method: "get",
        url: "/getSms/",
        data: {
    
        }
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